import { motion } from "framer-motion";
import classes from "./Timeline.module.scss";
import timelineImg from "/images/metimeline.png";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
function Timeline() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 1025);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const timelineEvents = [
    {
      year: "2023",
      title: "Certified by Adobe",
      description:
        "Earned Adobe Commerce certifications – it felt like leveling up my frontend wizard skills!",
    },
    {
      year: "2022",
      title: "Frontend Dev @ Toogas",
      description:
        "Joined an amazing team building stylish, performant Magento 2 e-commerce sites for top brands.",
    },
    {
      year: "2022",
      title: "Lab Life @ Germano de Sousa",
      description:
        "Worked in molecular diagnostics (COVID-19 swabs and science!) at Germano de Sousa Labs.",
    },
    {
      year: "2020 - 2021",
      title: "Biotech Researcher",
      description:
        "Explored how phages can help the environment – mixing science, curiosity, and creativity.",
    },
    {
      year: "2021",
      title: "MSc. in Biotechnology",
      description:
        "Graduated with a brain full of experiments and a heart full of ambition.",
    },
    {
      year: "2019",
      title: "Bachelor's in Biology",
      description:
        "Started out curious about how life works — that curiosity still drives me today, just with code now!",
    },
  ];

  return (
    <div className={classes.timelineContainer}>
      <h2 className={classes.heading}>My Journey</h2>
      <div className={classes["timeline__content"]}>
        <div className={classes["timeline__image"]}>
          <img src={timelineImg} alt="timeline image" />
        </div>

        <div className={classes.timeline}>
          {timelineEvents.map((event, index) =>
            isMobile ? (
              <div key={index} className={classes.timelineItem}>
                <div className={classes.icontimeline}>
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <div className={classes.timelineContent}>
                  <span className={classes.year}>{event.year}</span>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </div>
              </div>
            ) : (
              <motion.div
                key={index}
                className={classes.timelineItem}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                            <div className={classes.icontimeline}>
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <div className={classes.timelineContent}>
                  <span className={classes.year}>{event.year}</span>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
