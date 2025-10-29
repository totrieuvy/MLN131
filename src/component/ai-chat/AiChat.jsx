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
  const bestVoiceRef = useRef(null);

  // Gợi ý dựa theo nội dung của Homepage + Factor
  const suggestedQuestions = [
    // Từ Homepage
    "Theo chủ nghĩa Mác - Lênin, dân tộc là gì?",
    "Một dân tộc được hình thành dựa trên những đặc trưng nào?",
    // Từ Factor
    "Tại sao lãnh thổ lại là yếu tố thiêng liêng của một dân tộc?",
    "Ngôn ngữ chung có ý nghĩa thế nào đối với sự đoàn kết dân tộc?",
  ];

  // Cuộn xuống khi có tin nhắn mới
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" });
    }
  }, [messages]);

  // Chọn giọng nói tốt nhất
  useEffect(() => {
    const setVoices = () => {
      const available = window.speechSynthesis.getVoices() || [];
      const vn = available.find((v) => v.lang?.toLowerCase().startsWith("vi"));
      const googleVN = available.find((v) => /google/i.test(v.name) && v.lang?.startsWith("vi"));
      bestVoiceRef.current = googleVN || vn || available[0];
    };
    setVoices();
    window.speechSynthesis.onvoiceschanged = setVoices;
    return () => (window.speechSynthesis.onvoiceschanged = null);
  }, []);

  const speakText = (text) => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "vi-VN";
    utterance.rate = 0.95;
    if (bestVoiceRef.current) utterance.voice = bestVoiceRef.current;
    window.speechSynthesis.speak(utterance);
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = { type: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("https://aziky.duckdns.org/hcm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: input }),
      });
      const data = await res.json();
      const aiMessage = {
        type: "ai",
        content: data.message || "Xin lỗi, tôi không thể trả lời câu hỏi này.",
      };
      setMessages((prev) => [...prev, aiMessage]);
      speakText(aiMessage.content);
    } catch {
      setMessages((prev) => [...prev, { type: "error", content: "Lỗi kết nối đến dịch vụ AI. Vui lòng thử lại sau." }]);
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

        {/* Khu vực câu hỏi gợi ý */}
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
    </div>
  );
};

export default AiChat;
