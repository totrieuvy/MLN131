import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./Homepage.scss";

const Homepage = () => {
  // === DỮ LIỆU MỚI CHO 5 ĐẶC TRƯNG ===
  const characteristics = [
    {
      title: "1. Lãnh thổ chung (không gian sinh tồn)",
      text: "Lãnh thổ không chỉ là không gian địa lý mà còn là kết cấu các điều kiện tự nhiên, kinh tế và lịch sử, nơi hình thành mối quan hệ xã hội ổn định. Lãnh thổ cung cấp cơ sở vật chất cho sinh hoạt, sản xuất, giao lưu văn hoá, và đồng thời trở thành biểu tượng gắn kết cộng đồng—từ di tích lịch sử, địa danh linh thiêng đến biên giới được thừa nhận trên thực tế và pháp lý.",
      img: "https://maisonoffice.vn/wp-content/uploads/2023/11/1-ban-do-the-gioi-va-cac-chau-luc-moi-nhat-hien-nay.jpg",
      alt: "Bản đồ lãnh thổ Việt Nam",
    },
    {
      title: "2. Đời sống kinh tế thống nhất",
      text: "Đây là nền tảng vật chất của dân tộc. Một hệ thống kinh tế tương đối liên kết—dù mang tính địa phương hay mang tính quốc gia— tạo ra các quan hệ lợi ích, sự phân công lao động và các thiết chế kinh tế-cộng đồng. Đời sống kinh tế giải thích vì sao các nhóm cư dân gắn bó và phát triển thành cộng đồng có tính liên tục.",
      img: "https://cdn.nhandan.vn/images/1ef398c4e2fb4bf07980a2ded785b3efd626c3ab213d7a77660e691b93ab6697f67ac7aa7b7edcef763df7d49f5509beb7ae13cda333b1a658a4aa09dbd85477/5-01-7791.jpg",
      alt: "Ruộng bậc thang thể hiện kinh tế nông nghiệp",
    },
    {
      title: "3. Ngôn ngữ chung (phương tiện giao tiếp)",
      text: "Ngôn ngữ đóng vai trò trung tâm trong truyền đạt tri thức, truyền thống văn hoá, tín ngưỡng và luật tục. Sự thống nhất ngôn ngữ có thể là ngôn ngữ mẹ đẻ chi phối hoặc một ngôn ngữ chung do quá trình tiếp xúc lịch sử hình thành.",
      img: "https://png.pngtree.com/thumb_back/fh260/background/20210902/pngtree-the-background-photography-of-the-empty-library-bookstore-indoors-image_785539.jpg",
      alt: "Thư viện sách thể hiện ngôn ngữ và tri thức",
    },
    {
      title: "4. Nền văn hóa – tâm lý – bản sắc",
      text: "Bao gồm tín ngưỡng, phong tục, nghệ thuật, lễ nghi, triết lý sống và những biểu hiện tinh thần khác. Bản sắc tạo thành hệ tham chiếu nội bộ để phân biệt 'chúng ta' với người khác, và là yếu tố cơ bản bảo tồn di sản tinh thần qua các thế hệ.",
      img: "https://ik.imagekit.io/tvlk/blog/2022/08/van-mieu-quoc-tu-giam-1.jpg",
      alt: "Văn Miếu Quốc Tử Giám thể hiện văn hóa",
    },
    {
      title: "5. Nhà nước chung (thiết chế chính trị)",
      text: "Ở một trình độ phát triển nhất định, dân tộc biểu hiện qua sự tồn tại của một thiết chế nhà nước tương đối thống nhất, có khả năng thực thi quyền lực chính trị, bảo vệ toàn vẹn lãnh thổ và điều phối các thiết chế kinh tế - xã hội. Nhà nước làm nhiệm vụ tổ chức xã hội, hiện thực hoá quyền lợi chung và điều hoà những mâu thuẫn nội bộ.",
      img: "https://hanoicreativecity.com/wp-content/uploads/2019/07/anh_bia_AIOI.jpg",
      alt: "Tòa nhà Quốc hội Việt Nam thể hiện nhà nước chung",
    },
  ];
  // ==================================

  // Dữ liệu cho lưới ảnh ví dụ (Giữ nguyên)
  const vietnamExamples = [
    {
      title: "Đình Làng (Văn hóa Cộng đồng)",
      desc: "Biểu tượng cho sự cố kết làng xã, nơi diễn ra các hoạt động tín ngưỡng và hành chính.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwhXasvVMifmYXAY0W-XhV4ghyaTiqqMsYIw&s",
    },
    {
      title: "Trống đồng (Biểu tượng Dân tộc)",
      desc: "Đại diện cho nền văn minh lúa nước và kỹ thuật luyện kim, thể hiện bản sắc và lịch sử lâu đời.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdZ5K99wdeebZrHgFVw0hDrZ30npbjUIbMFg&s",
    },
    {
      title: "Áo dài (Bản sắc Văn hóa)",
      desc: "Trang phục truyền thống tôn vinh vẻ đẹp và tinh thần của người Việt Nam qua nhiều thời kỳ.",
      img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjlaRCl_B0DRWMREepXVqDReKA5MRYZdZndcoLkeaz-V69PTndhBEUhnEP_xzViYH7Ueq8JgITtKMe_BI9IvPtpMf75mwk30Qk-kl34BBtOsPbS8a25z3T-c2OWq_q2lhuflszV-M9HdoWTVRGs2D8FWFQH_b0NoiIFfFGzFAcSsMsgyF7TnjD-tsvDLyE/s350/(%20Anhpng.com%20)%20%C3%81O%20D%C3%80I%20VI%E1%BB%86T%20NAM%20%20(23).png",
    },
  ];

  return (
    <div className="homepage vietnam-heritage">
      {/* ==== BANNER (Giữ nguyên) ==== */}
      <section className="homepage__banner">
        <motion.h1
          className="homepage__title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          TỒN TẠI VÀ BẢO TỒN DÂN TỘC: LÝ LUẬN VÀ THỰC TIỄN
        </motion.h1>
        <div className="banner__overlay"></div>
      </section>

      {/* ==== GIỚI THIỆU CHUNG ==== */}
      <section className="homepage__content">
        <motion.h2
          className="homepage__heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          KHÁI NIỆM VÀ PHÂN TÍCH CHUNG
        </motion.h2>

        <motion.div
          className="homepage__text expanded-text academic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          {/* 1. Phần Giới thiệu (Giữ nguyên) */}
          <p>
            Trong khuôn khổ lý luận Mác - Lênin, khái niệm "dân tộc" được hiểu là một hình thức cộng đồng xã hội lịch
            sử, biểu hiện qua một tổ chức dân cư tương đối ổn định có những đặc điểm chung về lãnh thổ, kinh tế, văn
            hoá, ngôn ngữ và quyền lực chính trị — tức nhà nước. Dân tộc trải qua quá trình lịch sử lâu dài, hình thành
            từ những biến đổi về phương thức sản xuất, quan hệ xã hội và quá trình thống nhất chính trị.
          </p>
          <p>
            Việc phân tích các đặc trưng của dân tộc không chỉ mang tính mô tả mà còn có ý nghĩa thực tiễn để hiểu rõ cơ
            sở tồn tại, mối quan hệ nội bộ và cách thức bảo vệ, phát huy tính đặc thù của từng dân tộc — điều then chốt
            trong xây dựng chính sách dân tộc, giáo dục lịch sử và quản trị nhà nước.
          </p>

          {/* === 5 ĐẶC TRƯNG (LAYOUT MỚI VỚI ẢNH) === */}
          <h3 className="homepage__subheading">5 ĐẶC TRƯNG CƠ BẢN CỦA MỘT DÂN TỘC</h3>
          {characteristics.map((char, i) => (
            <motion.section
              key={i}
              className={`hp-characteristic__block ${i % 2 === 0 ? "left" : "right"}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <div className="hp-characteristic__text">
                <h3>{char.title}</h3>
                <p>{char.text}</p>
              </div>
              <div className="hp-characteristic__media">
                <img src={char.img} alt={char.alt} />
              </div>
            </motion.section>
          ))}
          {/* ========================================= */}

          {/* 3. Phần Nội dung tiếp theo (Giữ nguyên) */}
          <p>
            Những đặc trưng trên không phải lúc nào cũng đồng thời xuất hiện ở mức độ trọn vẹn; lịch sử cho thấy nhiều
            hình thức cộng đồng chỉ hội tụ một số đặc trưng nhất định trước khi phát triển thành dân tộc đầy đủ. Tuy
            nhiên, sự có mặt của nhà nước thường được coi là dấu hiệu cho thấy một dân tộc đã đạt tới trình độ tổ chức
            chính trị nhất định.
          </p>

          {/* === VÍ DỤ LỊCH SỬ (Layout card - Giữ nguyên) === */}
          <h3>Ví dụ lịch sử – văn hóa: Việt Nam</h3>
          <p>
            Quá trình hình thành dân tộc Việt Nam là một minh chứng phức tạp cho mối quan hệ giữa năm đặc trưng nói
            trên. Những biểu tượng văn hoá không chỉ là di sản mà còn là phương tiện truyền tải các giá trị lịch sử,
            triết lý xã hội và ý chí tự chủ của cộng đồng.
          </p>

          <div className="homepage__example-grid">
            {vietnamExamples.map((item, i) => (
              <motion.div
                className="example-card"
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <img src={item.img} alt={item.title} className="example-card__img" />
                <div className="example-card__overlay"></div>
                <div className="example-card__content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          {/* ============================================ */}

          <p>
            Những biểu tượng văn hoá—đình làng, trống đồng, áo dài, lễ hội truyền thống—không chỉ là di sản vật thể và
            phi vật thể mà còn là phương tiện truyền tải các giá trị lịch sử, triết lý xã hội và ý chí tự chủ của cộng
            đồng.
          </p>

          <h3>Vai trò của nhà nước trong bảo tồn và phát triển dân tộc</h3>
          <p>
            Nhà nước hiện đại có các công cụ pháp lý, chính sách văn hoá, giáo dục và kinh tế để bảo tồn bản sắc dân tộc
            đồng thời thúc đẩy hội nhập. Trong bối cảnh toàn cầu hoá và tiếp biến văn hoá mạnh mẽ, vai trò điều phối của
            nhà nước càng trở nên quan trọng: bảo vệ di sản, hỗ trợ ngôn ngữ và giáo dục lịch sử, đảm bảo công bằng kinh
            tế giữa các vùng, và điều tiết quan hệ quốc tế để giữ vững chủ quyền.
          </p>

          <p>
            Kết hợp lý luận Mác – Lênin với khảo sát thực tiễn cho phép xây dựng các chính sách dân tộc vừa đảm bảo
            quyền lợi của các cộng đồng thiểu số, vừa giữ vững tính thống nhất quốc gia; điều này là tiền đề cho phát
            triển xã hội bền vững.
          </p>
        </motion.div>
      </section>

      {/* ==== ĐỀ CƯƠNG V.I. LÊ-NIN (Layout nền tối - Giữ nguyên) ==== */}
      <section className="lenin-section">
        <motion.h2
          className="lenin-section__title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ĐỀ CƯƠNG VỀ VẤN ĐỀ DÂN TỘC CỦA V.I. LÊ-NIN
        </motion.h2>

        <motion.p
          className="lenin-section__intro"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Lênin phân tích vấn đề dân tộc trong mối quan hệ với giai cấp và chủ nghĩa đế quốc. Ông cho rằng quyền tự quyết
          và bình đẳng là nguyên tắc căn bản để chống áp bức đế quốc và xây dựng liên minh giai cấp quốc tế.
        </motion.p>

        <div className="lenin-section__cards">
          <motion.div
            className="lenin-section__card"
            whileHover={{ scale: 1.03, boxShadow: "0px 8px 25px rgba(212, 183, 106, 0.15)" }}
            transition={{ type: "spring", stiffness: 140 }}
          >
            <h3>📘 Bình đẳng giữa các dân tộc</h3>
            <p>
              Nguyên tắc gỡ bỏ mọi chính sách phân biệt, bóc lột; tạo điều kiện cho hợp tác tự nguyện, công bằng và tin
              tưởng lẫn nhau.
            </p>
          </motion.div>

          <motion.div
            className="lenin-section__card"
            whileHover={{ scale: 1.03, boxShadow: "0px 8px 25px rgba(212, 183, 106, 0.15)" }}
            transition={{ type: "spring", stiffness: 140 }}
          >
            <h3>✊ Quyền tự quyết dân tộc</h3>
            <p>
              Bao gồm quyền "tự do phân lập" (xu hướng tách ra) để chống áp bức, và quyền "tự nguyện liên hiệp" (xu hướng
              liên hiệp lại) vì lợi ích chung.
            </p>
          </motion.div>

          <motion.div
            className="lenin-section__card"
            whileHover={{ scale: 1.03, boxShadow: "0px 8px 25px rgba(212, 183, 106, 0.15)" }}
            transition={{ type: "spring", stiffness: 140 }}
          >
            <h3>🌍 Liên hiệp công nhân các dân tộc</h3>
            <p>
              Nội dung cơ bản nhất, thể hiện sự đoàn kết giai cấp quốc tế, vượt lên trên lợi ích dân tộc hẹp hòi để đạt
              mục tiêu cách mạng chung.
            </p>
          </motion.div>
        </div>

        <motion.p
          className="lenin-section__footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Áp dụng lý luận Lênin vào điều kiện bản địa đòi hỏi sự tổng hợp giữa nguyên tắc quốc tế và nhận thức sâu sắc
          về lịch sử, văn hoá từng dân tộc.
        </motion.p>
      </section>
    </div>
  );
};

export default Homepage;