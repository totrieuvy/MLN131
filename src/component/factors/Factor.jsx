import React, { useEffect, useState, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./Factor.scss";

const Factor = () => {
  const [speakingIndex, setSpeakingIndex] = useState(null);
  const [, setVoices] = useState([]);
  const bestVoiceRef = useRef(null);

  // Các ảnh đã chọn
  const factors = [
    {
      title: "Lãnh thổ chung",
      text: 'Đây không chỉ là không gian địa lý mà còn là "không gian sinh tồn" của dân tộc, bao gồm vùng đất, vùng trời, vùng biển thuộc chủ quyền quốc gia. Lãnh thổ là cơ sở vật chất cho các hoạt động kinh tế, văn hóa, xã hội và là yếu tố thiêng liêng gắn với khái niệm "Tổ quốc". Việc xác lập và bảo vệ chủ quyền lãnh thổ là nghĩa vụ và trách nhiệm cao nhất của mỗi thành viên trong dân tộc.',
      img: "https://maisonoffice.vn/wp-content/uploads/2023/11/1-ban-do-the-gioi-va-cac-chau-luc-moi-nhat-hien-nay.jpg",
    },
    {
      title: "Ngôn ngữ chung",
      text: "Ngôn ngữ là công cụ giao tiếp thống nhất, giúp liên kết các thành viên trong cộng đồng trên mọi lĩnh vực. Nó không chỉ truyền tải thông tin mà còn là phương tiện lưu giữ, truyền bá văn hóa, lịch sử, và tạo nên sự đồng nhất về tư tưởng, tình cảm. Trong một quốc gia đa tộc người, thường sẽ có một ngôn ngữ chung để giao tiếp và quản lý.",
      img: "https://png.pngtree.com/png-clipart/20200224/original/pngtree-globe-launguage-icon-simple-style-png-image_5248653.jpg",
    },
    {
      title: "Đời sống kinh tế chung",
      text: "Đây là yếu tố được xem là quan trọng nhất, là nền tảng vật chất vững chắc của cộng đồng dân tộc. Một nền kinh tế thống nhất, với sự phân công lao động và trao đổi giữa các vùng, các ngành, sẽ tạo ra các mối liên hệ kinh tế chặt chẽ, gắn kết các thành viên và các bộ phận của dân tộc lại với nhau, đảm bảo tính ổn định và bền vững cho toàn bộ cộng đồng.",
      img: "https://hungyen.dcs.vn/ckfinder/userfiles/files/9_lenin_12_acting_man_yofs.jpg",
    },
    {
      title: "Bản sắc văn hóa và ý thức tự giác dân tộc",
      text: "Yếu tố này bao gồm toàn bộ các giá trị văn hóa vật chất và tinh thần như phong tục, tập quán, tín ngưỡng, nghệ thuật, cùng với tâm lý, tính cách đặc thù được hình thành qua hàng ngàn năm lịch sử. Đi cùng với đó là ý thức tự giác, tức là sự tự nhận thức về sự thống nhất của cộng đồng mình, về nguồn gốc và bản sắc riêng, giúp phân biệt dân tộc này với dân tộc khác và tạo nên sức mạnh tinh thần to lớn.",
      img: "https://image.luatvietnam.vn/uploaded/twebp/images/original/2023/10/09/ban-sac-van-hoa-dan-toc-la-gi_0910185513.jpg",
    },
  ];

  // GIỮ NGUYÊN — KHÔNG ĐỤNG
  useEffect(() => {
    const setAllVoices = () => {
      const available = window.speechSynthesis.getVoices() || [];
      setVoices(available);

      const candidates = available.filter((v) => {
        if (!v.lang) return false;
        return v.lang.toLowerCase().startsWith("vi") || v.lang.toLowerCase().includes("vietnam");
      });

      if (candidates.length > 0) {
        const googleCandidate = candidates.find((v) => v.name && /google/i.test(v.name)) || candidates[0];

        bestVoiceRef.current = googleCandidate;
      } else {
        const fallback = available.find((v) => v.lang && v.lang.toLowerCase().includes("vn")) || available[0] || null;

        bestVoiceRef.current = fallback;
      }
    };

    setAllVoices();
    window.speechSynthesis.onvoiceschanged = () => {
      setAllVoices();
    };

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  // ✅ CHỈ CHỈNH HÀM NÀY — ĐỔI SANG RESPONSIVEVOICE
  const handleSpeak = (text, index) => {
    // Nếu đang đọc → dừng
    if (speakingIndex === index) {
      if (window.responsiveVoice) window.responsiveVoice.cancel();
      setSpeakingIndex(null);
      return;
    }

    if (window.responsiveVoice) {
      window.responsiveVoice.cancel();
      window.responsiveVoice.speak(text, "Vietnamese Female", {
        rate: 1,
        pitch: 1,
        volume: 1,
        onstart: () => setSpeakingIndex(index),
        onend: () => setSpeakingIndex(null),
        onerror: () => setSpeakingIndex(null),
      });
    } else {
      alert("ResponsiveVoice chưa load! Bạn đã thêm script vào index.html chưa?");
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

              {/* GIỮ NGUYÊN: Hiển thị voice hiện tại */}
              <small className="voice-note">
                {bestVoiceRef.current ? `Voice: ${bestVoiceRef.current.name}` : "Voice: (mặc định)"}
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
