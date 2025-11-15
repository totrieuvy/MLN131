import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./Homepage.scss";

const Homepage = () => {
  return (
    <div className="homepage vietnam-heritage">
      {/* ==== BANNER ==== */}
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

          <h3>5 đặc trưng cơ bản của một dân tộc (mở rộng, học thuật)</h3>

          <ul>
            <li>
              <strong>1. Lãnh thổ chung (không gian sinh tồn):</strong> Lãnh thổ không chỉ là không gian địa lý mà còn
              là kết cấu các điều kiện tự nhiên, kinh tế và lịch sử, nơi hình thành mối quan hệ xã hội ổn định. Lãnh thổ
              cung cấp cơ sở vật chất cho sinh hoạt, sản xuất, giao lưu văn hoá, và đồng thời trở thành biểu tượng gắn
              kết cộng đồng—từ di tích lịch sử, địa danh linh thiêng đến biên giới được thừa nhận trên thực tế và pháp
              lý.
            </li>

            <li>
              <strong>2. Đời sống kinh tế thống nhất (liên hệ sản xuất và mô hình sinh kế):</strong> Đây là nền tảng vật
              chất của dân tộc. Một hệ thống kinh tế tương đối liên kết—dù mang tính địa phương hay mang tính quốc gia—
              tạo ra các quan hệ lợi ích, sự phân công lao động và các thiết chế kinh tế-cộng đồng. Đời sống kinh tế
              giải thích vì sao các nhóm cư dân gắn bó và phát triển thành cộng đồng có tính liên tục.
            </li>

            <li>
              <strong>3. Ngôn ngữ chung (phương tiện giao tiếp và truyền thống tư tưởng):</strong> Ngôn ngữ đóng vai trò
              trung tâm trong truyền đạt tri thức, truyền thống văn hoá, tín ngưỡng và luật tục. Sự thống nhất ngôn ngữ
              có thể là ngôn ngữ mẹ đẻ chi phối hoặc một ngôn ngữ chung do quá trình tiếp xúc lịch sử hình thành.
            </li>

            <li>
              <strong>4. Nền văn hóa – tâm lý – bản sắc:</strong> Bao gồm tín ngưỡng, phong tục, nghệ thuật, lễ nghi,
              triết lý sống và những biểu hiện tinh thần khác. Bản sắc tạo thành hệ tham chiếu nội bộ để phân biệt
              "chúng ta" với người khác, và là yếu tố cơ bản bảo tồn di sản tinh thần qua các thế hệ.
            </li>

            <li>
              <strong>5. Nhà nước chung (thiết chế chính trị – pháp lý):</strong> Ở một trình độ phát triển nhất định,
              dân tộc biểu hiện qua sự tồn tại của một thiết chế nhà nước tương đối thống nhất, có khả năng thực thi
              quyền lực chính trị, bảo vệ toàn vẹn lãnh thổ và điều phối các thiết chế kinh tế - xã hội. Nhà nước làm
              nhiệm vụ tổ chức xã hội, hiện thực hoá quyền lợi chung và điều hoà những mâu thuẫn nội bộ trong khuôn khổ
              pháp lý.
            </li>
          </ul>

          <p>
            Những đặc trưng trên không phải lúc nào cũng đồng thời xuất hiện ở mức độ trọn vẹn; lịch sử cho thấy nhiều
            hình thức cộng đồng chỉ hội tụ một số đặc trưng nhất định trước khi phát triển thành dân tộc đầy đủ. Tuy
            nhiên, sự có mặt của nhà nước thường được coi là dấu hiệu cho thấy một dân tộc đã đạt tới trình độ tổ chức
            chính trị nhất định.
          </p>

          <h3>Ví dụ lịch sử – văn hóa: Việt Nam</h3>

          <p>
            Quá trình hình thành dân tộc Việt Nam là một minh chứng phức tạp cho mối quan hệ giữa năm đặc trưng nói
            trên. Lãnh thổ đồng bằng sông Hồng, văn minh lúa nước, hệ thống ngôn ngữ tiếng Việt, phong tục tập quán,
            cùng với việc hình thành nhà nước phong kiến từ thời Hồng Bàng đến các triều đại Đại Việt, đã tạo nên một
            bản sắc lịch sử liên tục nhưng cũng chịu ảnh hưởng từ giao lưu với Trung Hoa, Ấn Độ và các nền văn hoá khác.
          </p>

          <div className="image-grid">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwhXasvVMifmYXAY0W-XhV4ghyaTiqqMsYIw&s"
              alt="Đình làng Việt"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdZ5K99wdeebZrHgFVw0hDrZ30npbjUIbMFg&s"
              alt="Trống đồng Đông Sơn"
            />
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjlaRCl_B0DRWMREepXVqDReKA5MRYZdZndcoLkeaz-V69PTndhBEUhnEP_xzViYH7Ueq8JgITtKMe_BI9IvPtpMf75mwk30Qk-kl34BBtOsPbS8a25z3T-c2OWq_q2lhuflszV-M9HdoWTVRGs2D8FWFQH_b0NoiIFfFGzFAcSsMsgyF7TnjD-tsvDLyE/s350/(%20Anhpng.com%20)%20%C3%81O%20D%C3%80I%20VI%E1%BB%86T%20NAM%20%20(23).png"
              alt="Áo dài và nón"
            />
          </div>

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

      {/* ==== ĐỀ CƯƠNG V.I. LÊ-NIN ==== */}
      <section className="lenin-glass">
        <motion.h2
          className="lenin-glass__title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ĐỀ CƯƠNG VỀ VẤN ĐỀ DÂN TỘC CỦA V.I. LÊ-NIN (MỞ RỘNG)
        </motion.h2>

        <motion.p
          className="lenin-glass__intro expanded-text academic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Lênin phân tích vấn đề dân tộc trong mối quan hệ với giai cấp và chủ nghĩa đế quốc — ông cho rằng quyền tự
          quyết và bình đẳng giữa các dân tộc là những nguyên tắc căn bản để đấu tranh chống áp bức đế quốc và xây dựng
          liên minh giai cấp quốc tế. Những luận điểm này vẫn giữ vai trò quan trọng trong việc xác định đường lối chính
          trị của phong trào cộng sản và phong trào giải phóng dân tộc thế kỷ XX.
        </motion.p>

        <motion.ul
          className="lenin-glass__trends"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <li>
            <strong>Xu hướng tách ra:</strong> Thể hiện khát vọng tự quyết, chống áp bức thuộc địa.
          </li>
          <li>
            <strong>Xu hướng liên hiệp lại:</strong> Thể hiện nhu cầu hợp tác để phát triển lực lượng sản xuất và đấu
            tranh chống chủ nghĩa đế quốc.
          </li>
        </motion.ul>

        <div className="lenin-glass__cards">
          <motion.div
            className="lenin-glass__card"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 140 }}
          >
            <h3>📘 Bình đẳng giữa các dân tộc</h3>
            <p>
              Bình đẳng là nguyên tắc để gỡ bỏ chính sách phân biệt và bóc lột giữa các dân tộc — tạo điều kiện cho hợp
              tác tự nguyện, công bằng.
            </p>
          </motion.div>

          <motion.div
            className="lenin-glass__card"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 140 }}
          >
            <h3>✊ Quyền tự quyết dân tộc</h3>
            <p>
              Quyền tự quyết là quyền định đoạt vận mệnh chính trị xã hội; trong thực tiễn, quyền này phải được thể chế
              hóa qua các thủ tục dân chủ, pháp lý.
            </p>
          </motion.div>

          <motion.div
            className="lenin-glass__card"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 140 }}
          >
            <h3>🌍 Liên hiệp công nhân các dân tộc</h3>
            <p>
              Sức mạnh đoàn kết liên ngành, liên dân tộc là nhân tố quyết định trong đấu tranh chống áp bức và xây dựng
              xã hội mới.
            </p>
          </motion.div>
        </div>

        <motion.p
          className="lenin-glass__footer expanded-text academic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Áp dụng lý luận Lênin vào điều kiện bản địa đòi hỏi sự tổng hợp giữa nguyên tắc quốc tế và nhận thức sâu sắc
          về lịch sử, văn hoá từng dân tộc. Trong bối cảnh Việt Nam, điều này đồng nghĩa với việc vừa bảo vệ quyền lợi
          dân tộc vừa thúc đẩy liên minh xã hội để tiến hành cải cách cách mạng xã hội chủ nghĩa.
        </motion.p>
      </section>
    </div>
  );
};

export default Homepage;
