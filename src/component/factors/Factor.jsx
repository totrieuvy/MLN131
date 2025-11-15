import React, { useEffect, useState, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./Factor.scss";

const Factor = () => {
  const [speakingIndex, setSpeakingIndex] = useState(null);
  const [, setVoices] = useState([]);
  const bestVoiceRef = useRef(null);

  // === PHẦN 1: 5 ĐẶC TRƯNG (Giữ nguyên từ code của bạn) ===
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
    {
      title: "Nhà nước chung (Thiết chế chính trị)",
      text: "Đây là thiết chế chính trị - pháp lý thống nhất, có khả năng thực thi quyền lực, quản lý xã hội và bảo vệ chủ quyền lãnh thổ. Nhà nước đóng vai trò điều phối các hoạt động kinh tế, xã hội và là yếu tố then chốt để phân biệt một quốc gia-dân tộc đã phát triển hoàn chỉnh, khác với các cộng đồng bộ lạc, bộ tộc.",
      img: "https://a.tcnn.vn/uploads/resources/hoainga/images/be-mac.jpg",
    },
  ];

  // === PHẦN 2: LỊCH SỬ (Thêm từ PDF) ===
  const historicalEvents = [
    {
      title: "Nguồn gốc của 'Nhà nước': Hòa ước Westfalen (1648)",
      text: "Hệ thống nhà nước hiện đại thường được cho là bắt nguồn từ châu Âu, cụ thể là từ Hòa ước Westfalen (1648). Hòa ước này chấm dứt cuộc Chiến tranh Ba mươi năm tàn khốc và khai sinh ra Nhà nước (State) hiện đại – một thực thể chính trị và địa lý, có chủ quyền tuyệt đối trong một lãnh thổ xác định, dựa trên các nguyên tắc như bất khả xâm phạm biên giới và không can thiệp vào công việc nội bộ.",
      img: "https://nghiencuuquocte.org/wp-content/uploads/2015/07/Westphalia.jpg",
      alt: "Hòa ước Westfalen",
    },
    {
      title: "Sự phức tạp học thuật: 'Huyền thoại Westfalen'",
      text: "Tuy nhiên, nhiều nhà sử học hiện đại gọi đây là 'huyền thoại Westfalen'. Họ lập luận rằng các văn bản hiệp ước thực tế không hề chứa đựng các nguyên tắc phổ quát về chủ quyền. Mặc dù tính chính xác về mặt pháp lý bị tranh cãi, Hòa ước Westfalen (1648) vẫn mang tính biểu tượng sâu sắc, đánh dấu sự kết thúc của một trật tự thế giới cũ dựa trên quyền lực tôn giáo và đế chế.",
      img: "https://i0.wp.com/lichsu.blog/wp-content/uploads/2025/01/ky-hoa-uoc-versailles.jpg?fit=1920%2C1080&ssl=1",
      alt: "Một văn bản hiệp ước cổ",
    },
    {
      title: "Nguồn gốc của 'Dân tộc': Cách mạng (1789) và Chủ quyền Nhân dân",
      text: "Nếu Westfalen khai sinh ra 'Nhà nước', thì phải đến cuối thế kỷ 18, khái niệm 'Dân tộc' (Nation) mới xuất hiện với tư cách là một chủ thể chính trị. Cách mạng Pháp (1789) được coi là 'biểu hiện mạnh mẽ đầu tiên' của chủ nghĩa dân tộc. Cuộc cách mạng này đã tạo ra một sự thay đổi kiến tạo: Chủ quyền được chuyển giao từ nhà vua sang cho 'nhân dân' (people) hay 'dân tộc' (nation).",
      img: "https://nghiencuuquocte.org/wp-content/uploads/2017/06/20.jpg",
      alt: "Cách mạng Pháp 1789",
    },
    {
      title: "Sự Hợp nhất của hai Cuộc Cách mạng",
      text: "Sự hình thành của 'quốc gia dân tộc' (Nation-State) chính là sự hợp nhất của hai cuộc cách mạng trên. Hòa ước Westfalen (1648) cung cấp 'Nhà nước' (State) – một thực thể lãnh thổ, pháp lý. Cách mạng Pháp (1789) cung cấp 'Dân tộc' (Nation) – một thực thể nhân dân, tư tưởng. Mục tiêu lý tưởng của chủ nghĩa dân tộc là làm cho biên giới của nhà nước (chính trị) trùng khớp hoàn toàn với biên giới của dân tộc (văn hóa).",
      img: "https://media.vietnamplus.vn/images/7255a701687d11cb8c6bbc58a6c8078510c0b4e88a213debf080481317ef1f22755bc1186463aabea062de94f790aff1212caa674acc1e7669a9f0acfef85940831804a67eba986658262fd32d982e8c7b964d346571c86bebf28931653d97b6/le_xuat_quan_cua_34_chien_si_tai_cay_da_tan_trao_500_021.jpg",
      alt: "Lá cờ cắm trên bản đồ thể hiện quốc gia dân tộc",
    },
  ];
  // ==================================

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
      {/* === PHẦN 1: 5 ĐẶC TRƯNG === */}
      <section className="factor__intro">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
          Phần 1: 5 Đặc trưng Cấu thành Dân tộc
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
                className={`factor__speak ${speakingIndex === `factor-${i}` ? "speaking" : ""}`}
                onClick={() => handleSpeak(f.text, `factor-${i}`)}
              >
                {speakingIndex === `factor-${i}` ? "Đang đọc... (Nhấn để dừng)" : "🔊 Nghe đọc"}
              </button>
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

      {/* === PHẦN 2: LỊCH SỬ HÌNH THÀNH === */}
      <h2 className="factor__divider">Phần 2: Sự Trỗi Dậy Lịch Sử Của Quốc Gia Dân Tộc</h2>

      {historicalEvents.map((f, i) => (
        <motion.section
          key={i}
          className={`factor__block ${i % 2 !== 0 ? "left" : "right"}`} // Đảo ngược thứ tự L/R
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
                className={`factor__speak ${speakingIndex === `history-${i}` ? "speaking" : ""}`}
                onClick={() => handleSpeak(f.text, `history-${i}`)}
              >
                {speakingIndex === `history-${i}` ? "Đang đọc... (Nhấn để dừng)" : "🔊 Nghe đọc"}
              </button>
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