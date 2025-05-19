import { useEffect, useState } from "react";
import classes from "./Certifications.module.scss";
import Modal from "../UI/Modal";
import { motion } from "framer-motion";
import CustomButton from "../UI/CustomButton";
import reactGuide from "/certificates/react-guide.jpg";
import adobeExpert from "/certificates/adobe-expert.png";
import adobeProf from "/certificates/adobe-professional.png";
import bootcamp from "/certificates/web-dev-bootcamp.jpg";
import olx from "/certificates/olx-workshop.png";

const certifications = [
  {
    title: "React Complete Guide - Udemy",
    image: reactGuide,
  },
  {
    title: "Adobe Certified Expert - Adobe Commerce Front End Developer",
    image: adobeExpert,
  },
  {
    title: "Adobe Certified Professional - Adobe Commerce Developer",
    image: adobeProf,
  },
  {
    title: "The Complete 2022 Web Development Bootcamp – Udemy",
    image: bootcamp,
  },
  {
    title: "OLX Women Workshops – OLX Group",
    image: olx,
  },
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 1025);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const closeModal = () => {
    setSelectedCert(null);
  };

  return (
    <section className={classes.certifications}>
      <h2>Officially Certified</h2>
      <ul>
        {certifications.map((cert, index) => (
          <motion.li
            key={index}
            onClick={() => setSelectedCert(cert)}
            whileHover={isMobile ? {} : { scale: 1.02 }}
            whileTap={isMobile ? {} : { scale: 0.98 }}
          >
            🔍 <span>{cert.title}</span>
          </motion.li>
        ))}
      </ul>

      {selectedCert && (
        <Modal classes={classes.certificationsModal} onClose={() => setSelectedCert(null)}>
          <div style={{ textAlign: "center" }}>
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              style={{
                maxWidth: "100%",
                maxHeight: "70vh",
                borderRadius: "8px",
              }}
            />
            <p style={{ marginTop: "1rem" }}>{selectedCert.title}</p>
            <CustomButton
              onClick={closeModal}
              className="secondary"
              style={{ marginTop: "1rem" }}
            >
              Close
            </CustomButton>
          </div>
        </Modal>
      )}
    </section>
  );
}
