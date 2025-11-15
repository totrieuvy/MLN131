import React from "react";
import { motion } from "framer-motion";
import "./Nationalism.scss";

const Nationalism = () => {
  return (
    <div className="nationalism">
      {/* Giới thiệu */}
      <section className="nationalism__intro">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
          Chủ nghĩa Dân tộc: Động cơ Tư tưởng
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}>
          Chủ nghĩa dân tộc (nationalism) là hệ tư tưởng cung cấp động lực và tính chính danh cho quốc gia dân tộc. Nó
          dựa trên tiền đề rằng lòng trung thành của cá nhân với quốc gia-dân tộc vượt qua các lợi ích nhóm khác, trỗi
          dậy từ cuối thế kỷ 18 và định hình thế giới hiện đại.
        </motion.p>
      </section>

      {/* So sánh 2 mô hình */}
      <motion.div
        className="nationalism__content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="nationalism__comparison">
          {/* Mô hình 1: Tộc người */}
          <div className="nationalism__model ethnic">
            <div className="nationalism__model-header">
              <h3>Mô hình 1: Chủ nghĩa Dân tộc Tộc người</h3>
              <span>(Ethnic Nationalism)</span>
            </div>
            <p>
              Là hình thức trong đó "quốc gia được định nghĩa bởi sắc tộc". Tư cách thành viên dựa trên các đặc điểm hữu
              cơ, có từ khi sinh ra.
            </p>
            <ul>
              <li>
                <strong>Nền tảng:</strong> Nguồn gốc, huyết thống, "tổ tiên chung".
              </li>
              <li>
                <strong>Cơ sở đoàn kết:</strong> Văn hóa, ngôn ngữ, và tôn giáo chung.
              </li>
              <li>
                <strong>Mục tiêu:</strong> Thống nhất chính trị dựa trên sự chia sẻ văn hóa và nguồn gốc.
              </li>
            </ul>

            {/* === THÊM KHỐI ẢNH NÀY === */}
            <img
              src="https://wrightcourse.weebly.com/uploads/1/0/9/2/10923917/header_images/1477919724.jpg"
              alt="Thủ công dệt vải truyền thống"
              className="nationalism__model-image"
            />
            {/* ========================= */}

            <div className="nationalism__model-footer exclusive">
              <strong>Bản chất:</strong> Mang tính "LOẠI TRỪ" (Exclusive), nhấn mạnh sự đồng nhất và bảo vệ bản sắc.
            </div>
          </div>

          {/* Mô hình 2: Công dân */}
          <div className="nationalism__model civic">
            <div className="nationalism__model-header">
              <h3>Mô hình 2: Chủ nghĩa Dân tộc Công dân</h3>
              <span>(Civic Nationalism)</span>
            </div>
            <p>
              Là hình thức trong đó "quốc gia được định nghĩa bởi quyền tài phán pháp lý". Tư cách thành viên dựa trên
              các giá trị và thể chế chính trị.
            </p>
            <ul>
              <li>
                <strong>Nền tảng:</strong> Quyền công dân, sự tuân thủ pháp luật và Hiến pháp.
              </li>
              <li>
                <strong>Cơ sở đoàn kết:</strong> Lòng trung thành chung với các thể chế chính trị và các giá trị tự do.
              </li>
              <li>
                <strong>Mục tiêu:</strong> Xây dựng một cộng đồng chính trị tuân thủ các giá trị chung như tự do, bình
                đẳng.
              </li>
            </ul>

            {/* === THÊM KHỐI ẢNH NÀY === */}
            <img
              src="https://tiasang.com.vn/wp-content/uploads/old/Portals/0/Chu%20nghia%20dan%20toc%20a2.jpg"
              alt="Các bàn tay đoàn kết trong đa dạng"
              className="nationalism__model-image"
            />
            {/* ========================= */}

            <div className="nationalism__model-footer inclusive">
              <strong>Bản chất:</strong> Mang tính "BAO TRÙM" (Inclusive), chấp nhận "sự thống nhất trong đa dạng".
            </div>
          </div>
        </div>
      </motion.div>

      {/* Phân tích */}
      <motion.section
        className="nationalism__analysis"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0, delay: 0.4 }}
      >
        <h2>Phân tích về sự Phân đôi</h2>
        <p>
          Sự phân đôi Tộc người/Công dân là các <strong>"loại hình lý tưởng"</strong> (Ideal Types) trong học thuật,
          không phải là một sự phân chia cứng nhắc trong thực tế.
        </p>
        <p>
          Hầu hết các quốc gia dân tộc đều là một <strong>sự kết hợp (hybrid)</strong> của cả hai mô hình, nằm trên một
          quang phổ giữa hai cực lý tưởng này. Ví dụ, một quốc gia "công dân" vẫn có thể thúc đẩy mạnh mẽ một ngôn ngữ và
          văn hóa chung, và ngược lại.
        </p>
      </motion.section>
    </div>
  );
};

export default Nationalism;