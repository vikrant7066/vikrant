import { motion } from "framer-motion";
import { FaCheck, FaFileAlt, FaUsers,  } from "react-icons/fa";

const WorkExperience = () => {
  return (
    <section className="pt-20" id="work">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="text-center text-4xl font-semibold tracking-tighter"
      >
        Work Experience
      </motion.h2>

      {/* Counter Section */}
      <div className="container mt-10 mb-8">
        <div
          className="row justify-content-center"
          style={{
            display: "flex",
            justifyContent: "space-around",
            gap: "100px",
            flexWrap: "wrap", // Allow wrapping of counter boxes
          }}
        >
          {/* Work Completed */}
          <div className="col-sm-12 col-md-3 d-flex justify-content-center mb-4">
            <div
              className="counter-box pt-4 pt-md-0 text-center"
              style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
            >
              <div className="counter-ico">
                <span
                  className="ico-circle"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100px",
                    width: "100px",
                    borderRadius: "50%",
                    backgroundColor: "#5c6bc0",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    fontSize: "2rem",
                    color: "white",
                    marginBottom: "20px",
                  }}
                >
                  <FaCheck />
                </span>
              </div>
              <div className="counter-num">
                <p
                  data-purecounter-start="0"
                  data-purecounter-end="4"
                  data-purecounter-duration="1"
                  className="counter purecounter"
                ></p>
                <span className="counter-text">7</span>
                <br />
                <span className="counter-text">WORKS COMPLETED</span>
              </div>
            </div>
          </div>

          {/* Years of Experience */}
          <div className="col-sm-12 col-md-3 d-flex justify-content-center mb-4">
            <div
              className="counter-box pt-4 pt-md-0 text-center"
              style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
            >
              <div className="counter-ico">
                <span
                  className="ico-circle"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100px",
                    width: "100px",
                    borderRadius: "50%",
                    backgroundColor: "#5c6bc0",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    fontSize: "2rem",
                    color: "white",
                    marginBottom: "20px",
                  }}
                >
                  <FaFileAlt />
                </span>
              </div>
              <div className="counter-num">
                <p
                  data-purecounter-start="0"
                  data-purecounter-end="6"
                  data-purecounter-duration="1"
                  className="counter purecounter"
                ></p>
                <span className="counter-text">8</span>
                <br />
                <span className="counter-text">YEARS OF EXPERIENCE</span>
              </div>
            </div>
          </div>

          {/* Total Clients */}
          <div className="col-sm-12 col-md-3 d-flex justify-content-center mb-4">
            <div
              className="counter-box pt-4 pt-md-0 text-center"
              style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
            >
              <div className="counter-ico">
                <span
                  className="ico-circle"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100px",
                    width: "100px",
                    borderRadius: "50%",
                    backgroundColor: "#5c6bc0",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    fontSize: "2rem",
                    color: "white",
                    marginBottom: "20px",
                  }}
                >
                  <FaUsers />
                </span>
              </div>
              <div className="counter-num">
                <p
                  data-purecounter-start="0"
                  data-purecounter-end="5"
                  data-purecounter-duration="1"
                  className="counter purecounter"
                ></p>
                <span className="counter-text">10</span>
                <br />
                <span className="counter-text">TOTAL CLIENTS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Counter Section */}
    </section>
  );
};

export default WorkExperience;
