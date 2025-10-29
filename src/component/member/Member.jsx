import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./Member.scss";

const Member = () => {
  const members = [
    {
      name: "Tô Triều Vỹ",
      MSSV: "SE183178",
      description: "Phụ trách thiết kế website",
    },
    {
      name: "Đào Bảo Kha",
      MSSV: "SE183221",
      description: "Phụ trách nội dung website",
    },
    {
      name: "Phạm Cẩm Hoàng",
      MSSV: "SE183867",
      description: "Phụ trách phần AI",
    },
    {
      name: "Phạm Quốc Vinh",
      MSSV: "SE172866",
      description: "Phụ trách nội dung website",
    },
  ];

  const technologies = [
    {
      name: "ReactJS",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    },
    {
      name: "Gemini",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEb9ZPEmwPC_E1RYGhZ6EIr_ijNcubcopuVQ&s",
    },
    {
      name: "Framer Motion",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl1tSlLOLxqKWCQ6CsWrkuDsxf1hk-7WuRKw&s",
    },
  ];

  return (
    <div className="member">
      {/* Giới thiệu */}
      <section className="member__intro">
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          Đội Ngũ Phát Triển
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          Những người đứng sau dự án web lịch sử Việt Nam — cùng chung niềm đam mê công nghệ và giáo dục.
        </motion.p>
      </section>

      {/* Danh sách thành viên */}
      <section className="member__list">
        {members.map((m, i) => (
          <motion.div
            className="member__card"
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <h3>{m.name}</h3>
            <p className="member__desc">{m.MSSV}</p>
            <p className="member__desc">{m.description}</p>
          </motion.div>
        ))}
      </section>

      {/* Công nghệ sử dụng */}
      <section className="member__tech">
        <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          Công Nghệ Sử Dụng
        </motion.h2>
        <div className="member__tech-list">
          {technologies.map((tech, i) => (
            <motion.div
              className="member__tech-card"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <img src={tech.img} alt={tech.name} />
              <p>{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Member;
