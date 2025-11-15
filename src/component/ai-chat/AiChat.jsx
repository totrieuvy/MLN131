/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./AiChat.scss";

const AiChat = () => {
  const [messages, setMessages] = useState([
    {
      type: "system",
      content:
        "Xin chào! Tôi là trợ lý AI chuyên về lịch sử Việt Nam. Hãy hỏi tôi bất cứ điều gì về khái niệm dân tộc và các yếu tố cấu thành nên dân tộc!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef(null);

  const suggestedQuestions = [
    "Theo chủ nghĩa Mác - Lênin, dân tộc là gì?",
    "Một dân tộc được hình thành dựa trên những đặc trưng nào?",
    "Tại sao lãnh thổ lại là yếu tố thiêng liêng của một dân tộc?",
    "Ngôn ngữ chung có ý nghĩa thế nào đối với sự đoàn kết dân tộc?",
  ];

  // === THÊM MẢNG PROMPT MỚI ===
  const prompts = [
    {
      title: "Phác thảo ý tưởng và cấu trúc website",
      text: "Tôi muốn xây dựng một website giáo dục (micro-site) về chủ đề 'Khái niệm Dân tộc theo Chủ nghĩa Mác-Lênin'. Hãy đề xuất một cấu trúc trang (sitemap) hợp lý. Tôi dự định có Trang chủ (giới thiệu chung), một trang chi tiết về các đặc trưng, một trang về lịch sử hình thành, và một trang so sánh các mô hình chủ nghĩa dân tộc. Gợi ý một bảng màu (theme) chủ đạo mang tính học thuật, trang trọng (ví dụ: màu giấy da, xanh rêu đậm, vàng kim).",
    },
    {
      title: "Tổng hợp và biên tập nội dung học thuật",
      text: "Dựa trên tệp tài liệu 'Mở Rộng Khái Niệm Quốc Gia Dân Tộc.pdf', hãy giúp tôi biên tập nội dung cho 3 phần chính của website: 1. Nội dung Trang chủ: tập trung vào 5 đặc trưng cơ bản và tóm tắt đề cương Lênin. 2. Nội dung trang Lịch sử: tập trung vào Hòa ước Westfalen và Cách mạng Pháp. 3. Nội dung trang So sánh: tập trung vào 2 mô hình Chủ nghĩa Dân tộc Tộc người (Ethnic) và Công dân (Civic).",
    },
    {
      title: "Đề xuất thiết kế layout (Bố cục)",
      text: "Làm thế nào để trình bày 5 đặc trưng của dân tộc trên Trang chủ một cách trực quan và đỡ nhàm chán? Hãy gợi ý một layout (ví dụ: xen kẽ hình ảnh và văn bản). Đồng thời, hãy thiết kế một layout ấn tượng cho phần 'Đề cương Lênin' để làm nổi bật nó so với phần văn bản thông thường (ví dụ: sử dụng nền tối, màu tương phản, và bố cục thẻ).",
    },
    {
      title: "Tư vấn và tích hợp tính năng kỹ thuật (TTS)",
      text: "Tôi muốn website có tính năng Text-to-Speech (TTS) để hỗ trợ người dùng. Hãy đề xuất một API hoặc thư viện Javascript dễ sử dụng (ví dụ: ResponsiveVoice) hỗ trợ tốt giọng 'Vietnamese Female'. Hướng dẫn tôi cách triển khai cơ bản trong React: làm thế nào để tạo một nút bấm 'Nghe đọc' cho mỗi đoạn văn bản và quản lý trạng thái (phát/dừng) của chúng một cách độc lập.",
    },
    {
      title: "Tạo Giao diện AI Chatbot",
      text: "Tôi cần một trang 'AI Chat' để người dùng có thể hỏi đáp trực tiếp. Hãy thiết kế giao diện (JSX và SCSS) cho một hộp chat đơn giản, có nền (background) chủ đề lịch sử. Hướng dẫn cách kết nối (fetch) đến một API endpoint (ví dụ: 'https://hlui.duckdns.org/mln') để gửi câu hỏi của người dùng (dưới dạng JSON) và nhận về câu trả lời để hiển thị lên giao diện.",
    },
  ];
  // =============================

  // ResponsiveVoice TTS
  const speakText = (text) => {
    if (window.responsiveVoice) {
      window.responsiveVoice.cancel();
      window.responsiveVoice.speak(text, "Vietnamese Female", {
        rate: 1,
        pitch: 1,
        volume: 1,
      });
    }
  };

  // Auto scroll
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo({
        top: chatRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  // Gửi câu hỏi
  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { type: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("https://hlui.duckdns.org/mln", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: userMessage.content }),
      });

      const data = await res.json();

      const aiMessage = {
        type: "ai",
        content: data?.message || "Xin lỗi, tôi không thể trả lời câu hỏi này.",
      };

      setMessages((prev) => [...prev, aiMessage]);

      // Đọc bằng ResponsiveVoice
      speakText(aiMessage.content);
    } catch (e) {
      const errMsg = {
        type: "error",
        content: "Lỗi kết nối đến dịch vụ AI. Vui lòng thử lại sau.",
      };
      setMessages((prev) => [...prev, errMsg]);
      speakText(errMsg.content);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="ai-chat">
      <motion.div
        className="ai-chat__header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Trợ Lý AI Lịch Sử Việt Nam</h1>
        <p>Tìm hiểu về khái niệm và yếu tố hình thành dân tộc Việt Nam</p>
      </motion.div>

      <motion.div
        className="ai-chat__box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="ai-chat__messages" ref={chatRef}>
          {messages.map((msg, i) => (
            <div key={i} className={`ai-chat__message ${msg.type}`}>
              {msg.type === "system" ? (
                <div className="system-msg">{msg.content}</div>
              ) : msg.type === "user" ? (
                <div className="user-msg">
                  <div className="msg-content">{msg.content}</div>
                </div>
              ) : msg.type === "ai" ? (
                <div className="ai-msg">
                  <div className="msg-content">{msg.content}</div>
                </div>
              ) : (
                <div className="error-msg">{msg.content}</div>
              )}
            </div>
          ))}

          {isLoading && <div className="loading-msg">AI đang suy nghĩ...</div>}
        </div>

        {messages.length === 1 && (
          <motion.div
            className="ai-chat__suggest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3>Câu hỏi gợi ý:</h3>
            <div className="ai-chat__suggest-list">
              {suggestedQuestions.map((q, i) => (
                <button key={i} onClick={() => setInput(q)}>
                  {q}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        <div className="ai-chat__input">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Hãy hỏi tôi về các yếu tố hình thành dân tộc..."
            disabled={isLoading}
          />
          <button onClick={handleSend} disabled={!input.trim() || isLoading}>
            {isLoading ? "..." : "Gửi"}
          </button>
        </div>
      </motion.div>

      {/* === KHUNG PROMPT MỚI === */}
      <motion.section
        className="ai-chat__prompts"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2>Các Prompt Kỹ Thuật Đã Sử Dụng</h2>
        <div className="ai-chat__prompts-list">
          {prompts.map((prompt, index) => (
            <div className="prompt-card" key={index}>
              <h3>{prompt.title}</h3>
              <p>&quot;{prompt.text}&quot;</p>
            </div>
          ))}
        </div>
      </motion.section>
      {/* ======================= */}
    </div>
  );
};

export default AiChat;