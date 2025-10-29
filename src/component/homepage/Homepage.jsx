import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./Homepage.scss";

const Homepage = () => {
  return (
    <div className="homepage">
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

      <section className="homepage__content">
        <motion.h2
          className="homepage__heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          KHÁI NIỆM DÂN TỘC
        </motion.h2>

        <motion.div
          className="homepage__text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <p>
            Theo quan điểm của chủ nghĩa Mác-Lênin, "dân tộc" là một phạm trù lịch sử, một hình thức cộng đồng người ổn
            định được hình thành qua một quá trình phát triển lâu dài, sau các hình thức cộng đồng sơ khai hơn như thị
            tộc, bộ lạc, và bộ tộc. Sự ra đời và phát triển của dân tộc gắn liền với sự phát triển của phương thức sản
            xuất và sự xuất hiện của xã hội có giai cấp và nhà nước.
          </p>
          <p>Một dân tộc được xác định bởi bốn đặc trưng cơ bản, có mối liên hệ chặt chẽ với nhau:</p>
          <ul>
            <li>
              <strong>Có chung một vùng lãnh thổ ổn định:</strong> Lãnh thổ là không gian sinh tồn, là cơ sở vật chất
              cho sự tồn tại và phát triển của dân tộc.
            </li>
            <li>
              <strong>Có chung một phương thức sinh hoạt kinh tế:</strong> Đây được coi là đặc trưng quan trọng nhất.
              Các mối quan hệ kinh tế là nền tảng vật chất, là chất keo gắn kết các bộ phận, các thành viên trong dân
              tộc lại với nhau, tạo nên tính thống nhất, ổn định và bền vững cho cộng đồng.
            </li>
            <li>
              <strong>Có chung một ngôn ngữ giao tiếp:</strong> Ngôn ngữ là công cụ để các thành viên trong cộng đồng
              giao tiếp, trao đổi tư tưởng, tình cảm trên mọi lĩnh vực, từ đó tạo nên sự thống nhất về văn hóa.
            </li>
            <li>
              <strong>Có chung một nền văn hóa và tâm lý mang bản sắc riêng:</strong> Thể hiện qua giá trị văn hóa,
              phong tục, tín ngưỡng và tính cách chung của cộng đồng, giúp phân biệt dân tộc này với dân tộc khác.
            </li>
          </ul>
          <p>
            Cần lưu ý rằng, khái niệm "dân tộc" được hiểu theo hai nghĩa phổ biến: nghĩa hẹp (<em>ethnie</em>) chỉ một
            tộc người cụ thể trong một quốc gia đa dân tộc, và nghĩa rộng (<em>nation</em>) chỉ toàn bộ nhân dân của một
            quốc gia. Dưới góc độ chủ nghĩa xã hội khoa học, khái niệm dân tộc thường được nghiên cứu theo nghĩa hẹp.
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default Homepage;
