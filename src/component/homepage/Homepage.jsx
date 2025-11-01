import React from "react";
import { motion } from "framer-motion";
import "./Homepage.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      {/* ==== BANNER ==== */}
      <section className="homepage__banner">
        <motion.h1
          className="homepage__title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          TỒN TẠI DÂN TỘC
        </motion.h1>
      </section>

      {/* ==== KHÁI NIỆM ==== */}
      <section className="homepage__content">
        <motion.h2
          className="homepage__heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          KHÁI NIỆM DÂN TỘC
        </motion.h2>

        <motion.div
          className="homepage__text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <p>
            Theo quan điểm của chủ nghĩa Mác - Lênin, “dân tộc” là một phạm trù lịch sử, một hình thức cộng đồng người
            ổn định được hình thành qua quá trình phát triển lâu dài. Sự ra đời của dân tộc gắn liền với phương thức sản
            xuất và sự xuất hiện của nhà nước.
          </p>
          <p>Một dân tộc có bốn đặc trưng cơ bản:</p>
          <ul>
            <li>
              <strong>Lãnh thổ chung:</strong> Không gian sinh tồn và cơ sở vật chất cho sự tồn tại, phát triển dân tộc.
            </li>
            <li>
              <strong>Đời sống kinh tế thống nhất:</strong> Là nền tảng vật chất gắn kết các thành viên trong cộng đồng.
            </li>
            <li>
              <strong>Ngôn ngữ chung:</strong> Phương tiện giao tiếp, trao đổi tư tưởng và giá trị văn hóa.
            </li>
            <li>
              <strong>Nền văn hóa, tâm lý và bản sắc riêng:</strong> Giá trị tinh thần giúp phân biệt dân tộc này với
              dân tộc khác.
            </li>
          </ul>
        </motion.div>
      </section>

      {/* ==== ĐỀ CƯƠNG V.I. LÊ-NIN ==== */}
      <section className="lenin-glass">
        <motion.h2
          className="lenin-glass__title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ĐỀ CƯƠNG VỀ VẤN ĐỀ DÂN TỘC CỦA V.I. LÊ-NIN
        </motion.h2>

        <motion.p
          className="lenin-glass__intro"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Trên cơ sở phân tích thực tiễn phong trào cách mạng thế giới, Lê-nin đã xây dựng “Cương lĩnh dân tộc” dựa trên
          hai xu hướng phát triển khách quan:
        </motion.p>

        <motion.ul
          className="lenin-glass__trends"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <li>
            <strong>Xu hướng tách ra:</strong> Các cộng đồng dân cư muốn tách ra để hình thành quốc gia dân tộc độc lập.
          </li>
          <li>
            <strong>Xu hướng liên hiệp lại:</strong> Các dân tộc mong muốn hợp tác, liên minh do sự phát triển của lực
            lượng sản xuất và giao lưu văn hóa.
          </li>
        </motion.ul>

        <motion.p
          className="lenin-glass__desc"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Từ hai xu hướng này, Lê-nin chỉ ra ba nội dung cốt lõi trong Cương lĩnh dân tộc:
        </motion.p>

        <div className="lenin-glass__cards">
          <motion.div
            className="lenin-glass__card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <h3>📘 Bình đẳng giữa các dân tộc</h3>
            <p>
              Mọi dân tộc, dù lớn hay nhỏ, đều có quyền lợi và nghĩa vụ ngang nhau. Bình đẳng là nền tảng để thực hiện
              quyền tự quyết và thúc đẩy hợp tác hữu nghị.
            </p>
          </motion.div>

          <motion.div
            className="lenin-glass__card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <h3>✊ Quyền tự quyết dân tộc</h3>
            <p>
              Mỗi dân tộc có quyền tự định đoạt vận mệnh của mình — có thể tách ra lập quốc hoặc tự nguyện liên hiệp
              bình đẳng.
            </p>
          </motion.div>

          <motion.div
            className="lenin-glass__card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <h3>🌍 Liên hiệp công nhân các dân tộc</h3>
            <p>
              Thể hiện tinh thần quốc tế của giai cấp công nhân, đoàn kết các dân tộc bị áp bức để đấu tranh chống chủ
              nghĩa đế quốc và giành độc lập dân tộc.
            </p>
          </motion.div>
        </div>

        <motion.p
          className="lenin-glass__footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Cương lĩnh này trở thành cơ sở lý luận cho chính sách dân tộc của các Đảng Cộng sản trong sự nghiệp đấu tranh
          giành độc lập và xây dựng chủ nghĩa xã hội.
        </motion.p>
      </section>
    </div>
  );
};

export default Homepage;
