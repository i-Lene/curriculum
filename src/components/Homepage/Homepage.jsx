import { Link } from "react-router";
import meCartoon from "/images/mecartoon.svg";
import classes from "./Homepage.module.scss";
import { motion } from "motion/react";

function Homepage() {
  const whileHoverEffect = {
    scale: 1.05,
    backgroundColor: "#d4a5a5",
    transition: {
      duration: 0.3,
      type: "spring",
    },
  };

  const whileTapEffect = {
    scale: 0.95,
    transition: {
      duration: 0.3,
      type: "spring",
    },
  };

  return (
    <>
      <div className={classes.home}>
        <div className={classes.home__description}>
          <p className={classes.greeting}>Hello there!</p>
          <h1>I'm Marlene</h1>
          <p className={classes.jobTitle}>Frontend Developer</p>
        </div>
        <div className={classes.home__image}>
          <img src={meCartoon} alt="Marlene" className="home__image--cartoon" />
        </div>
      </div>
      <div className={classes.home__about}>
        <div className={classes.home__about__description}>
          <h2 className={classes.home__about__title}>
            Let me introduce myself !
          </h2>
          <p className={classes.home__about__text}>
            I am a passionate frontend developer with an ambition for creating
            beautiful and functional user interfaces. I love to learn new
            technologies and improve my skills.
          </p>
          <p className={classes.home__about__text}>
            I am currently looking for new opportunities to grow and make an
            impact in the tech world.
          </p>
          <p className={classes.home__about__text}>
            Feel free to reach out to me if you have any questions or just want
            to chat!
          </p>
        </div>
        <div className={classes.home__callToAction}>
          <motion.div
            whileHover={whileHoverEffect}
            whileTap={whileTapEffect}
            className={classes.home__callToAction__button}
          >
            <Link to="/contact">Lets talk</Link>
          </motion.div>

          <motion.div
            whileHover={whileHoverEffect}
            whileTap={whileTapEffect}
            className={classes.home__callToAction__button}
          >
            <Link to="/about">Get to know me</Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
