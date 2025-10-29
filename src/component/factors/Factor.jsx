import React, { useEffect, useState, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./Factor.scss";

const Factor = () => {
  const [speakingIndex, setSpeakingIndex] = useState(null);
  const [, setVoices] = useState([]);
  const bestVoiceRef = useRef(null);

  // Các ảnh đã chọn (public) phù hợp nội dung
  const factors = [
    {
      title: "Lãnh thổ chung",
      text: 'Đây không chỉ là không gian địa lý mà còn là "không gian sinh tồn" của dân tộc, bao gồm vùng đất, vùng trời, vùng biển thuộc chủ quyền quốc gia. Lãnh thổ là cơ sở vật chất cho các hoạt động kinh tế, văn hóa, xã hội và là yếu tố thiêng liêng gắn với khái niệm "Tổ quốc". Việc xác lập và bảo vệ chủ quyền lãnh thổ là nghĩa vụ và trách nhiệm cao nhất của mỗi thành viên trong dân tộc.',
      img: "https://media.istockphoto.com/id/1455958730/vi/vec-to/gi%C3%A1m-s%C3%A1t-v%C3%A0-ph%C3%A2n-t%C3%ADch-d%E1%BB%AF-li%E1%BB%87u-tr%C3%AAn-m%C3%A1y-t%C3%ADnh-%C4%91%E1%BB%83-b%C3%A0n-nh%E1%BB%AFng-ng%C6%B0%E1%BB%9Di-nh%E1%BB%8F-b%C3%A9-v%E1%BB%9Bi-%C4%91%E1%BB%93-th%E1%BB%8B-nghi%C3%AAn-c%E1%BB%A9u.jpg?s=612x612&w=0&k=20&c=tcmfzeeTFDOxCyDY9LzR6HckAM21uBcb9EYPZBCF8Pw=",
    },
    {
      title: "Ngôn ngữ chung",
      text: "Ngôn ngữ là công cụ giao tiếp thống nhất, giúp liên kết các thành viên trong cộng đồng trên mọi lĩnh vực. Nó không chỉ truyền tải thông tin mà còn là phương tiện lưu giữ, truyền bá văn hóa, lịch sử, và tạo nên sự đồng nhất về tư tưởng, tình cảm. Trong một quốc gia đa tộc người, thường sẽ có một ngôn ngữ chung để giao tiếp và quản lý.",
      img: "https://cdn.nhandan.vn/images/90226d43541fe3e6433eed17cac8f63a2dc3784b3fb5ccc593be5348d47b44da376c3f16f3bc8cf0299f2ec17cc2b51c/sgggg-4734.jpg",
    },
    {
      title: "Đời sống kinh tế chung",
      text: "Đây là yếu tố được xem là quan trọng nhất, là nền tảng vật chất vững chắc của cộng đồng dân tộc. Một nền kinh tế thống nhất, với sự phân công lao động và trao đổi giữa các vùng, các ngành, sẽ tạo ra các mối liên hệ kinh tế chặt chẽ, gắn kết các thành viên và các bộ phận của dân tộc lại với nhau, đảm bảo tính ổn định và bền vững cho toàn bộ cộng đồng.",
      img: "https://hungyen.dcs.vn/ckfinder/userfiles/files/9_lenin_12_acting_man_yofs.jpg",
    },
    {
      title: "Bản sắc văn hóa và ý thức tự giác dân tộc",
      text: "Yếu tố này bao gồm toàn bộ các giá trị văn hóa vật chất và tinh thần như phong tục, tập quán, tín ngưỡng, nghệ thuật, cùng với tâm lý, tính cách đặc thù được hình thành qua hàng ngàn năm lịch sử. Đi cùng với đó là ý thức tự giác, tức là sự tự nhận thức về sự thống nhất của cộng đồng mình, về nguồn gốc và bản sắc riêng, giúp phân biệt dân tộc này với dân tộc khác và tạo nên sức mạnh tinh thần to lớn.",
      img: "https://maisonoffice.vn/wp-content/uploads/2023/11/1-ban-do-the-gioi-va-cac-chau-luc-moi-nhat-hien-nay.jpg",
    },
  ];

  // Tìm chọn giọng tiếng Việt "tốt nhất" trên trình duyệt
  useEffect(() => {
    const setAllVoices = () => {
      const available = window.speechSynthesis.getVoices() || [];
      setVoices(available);

      // Ưu tiên: lang bắt đầu bằng 'vi' hoặc chứa 'Vietnam', sau đó ưu tiên name có 'Google' hoặc 'vi-VN'
      const candidates = available.filter((v) => {
        if (!v.lang) return false;
        return v.lang.toLowerCase().startsWith("vi") || v.lang.toLowerCase().includes("vietnam");
      });

      // Nếu có candidates, chọn voice có "Google" trong tên hoặc fallback là first candidate
      if (candidates.length > 0) {
        const googleCandidate = candidates.find((v) => v.name && /google/i.test(v.name)) || candidates[0];
        bestVoiceRef.current = googleCandidate;
      } else {
        // fallback: chọn voice có 'vn' hoặc first available
        const fallback = available.find((v) => v.lang && v.lang.toLowerCase().includes("vn")) || available[0] || null;
        bestVoiceRef.current = fallback;
      }
    };

    // Trong nhiều trình duyệt voices load bất đồng bộ => lắng nghe event
    setAllVoices();
    window.speechSynthesis.onvoiceschanged = () => {
      setAllVoices();
    };

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  const handleSpeak = (text, index) => {
    // Dừng nếu đang đọc cùng đoạn -> cancel
    if (speakingIndex === index) {
      window.speechSynthesis.cancel();
      setSpeakingIndex(null);
      return;
    }

    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "vi-VN"; // cố đặt ngôn ngữ
      // gán voice nếu có chọn
      if (bestVoiceRef.current) {
        utterance.voice = bestVoiceRef.current;
      }

      // điều chỉnh tỉ lệ/pitch nếu cần
      utterance.rate = 0.95; // hơi chậm để rõ tiếng
      utterance.pitch = 1;

      utterance.onstart = () => {
        setSpeakingIndex(index);
      };
      utterance.onend = () => {
        setSpeakingIndex(null);
      };
      utterance.onerror = () => {
        setSpeakingIndex(null);
        alert("Có lỗi khi phát âm. Bạn có thể thử trình duyệt khác.");
      };

      window.speechSynthesis.speak(utterance);
    } else {
      alert(
        "Trình duyệt của bạn không hỗ trợ Speech Synthesis. Nếu muốn chất lượng TTS tốt hơn, cân nhắc dùng Google Cloud TTS (phải cấu hình API key)."
      );
    }
  };

  return (
    <div className="factor">
      <section className="factor__intro">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
          Điều gì quyết định sự tồn tại của một dân tộc?
        </motion.h1>

        <motion.p
          className="factor__subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          (Nhấn nút 🔊 để nghe phần tương ứng)
        </motion.p>
      </section>

      {factors.map((f, i) => (
        <motion.section
          key={i}
          className={`factor__block ${i % 2 === 0 ? "left" : "right"}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: i * 0.15 }}
        >
          <div className="factor__text">
            <h2>{f.title}</h2>
            <p>{f.text}</p>
            <div className="factor__controls">
              <button
                className={`factor__speak ${speakingIndex === i ? "speaking" : ""}`}
                onClick={() => handleSpeak(f.text, i)}
              >
                {speakingIndex === i ? "Đang đọc... (Nhấn để dừng)" : "🔊 Nghe đọc"}
              </button>
              <small className="voice-note">
                {bestVoiceRef.current ? `Voice: ${bestVoiceRef.current.name}` : "Voice: (mặc định trình duyệt)"}
              </small>
            </div>
          </div>

          <div className="factor__media">
            <img src={f.img} alt={f.title} />
          </div>
        </motion.section>
      ))}
    </div>
  );
};

export default Factor;
