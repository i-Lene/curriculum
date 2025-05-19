import { Link } from "react-router";
import meCartoon from "/images/mecartoon.svg";
import classes from "./Homepage.module.scss";
import CustomButton from "../UI/CustomButton";
import { motion } from "motion/react";
import arrows from "/images/arrows.gif";

function Homepage() {
  function handleClick(e) {
    const button = e.currentTarget;
    const link = button.querySelector(".linkButton");
    link.click();
  }

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
        <span>
          <img className={classes.arrows} src={arrows} alt="arrows" />
        </span>
        <div className={classes.home__about__description}>
          <h2 className={classes.home__about__title}>
            Let me introduce myself !
          </h2>
          <div className={classes.home__about__text}>
            <p>
              Hello! I'm <strong>Marlene</strong>, and this is my portfolio
              where you can get to know me and my professional background.
            </p>
            <p>
              I'm a <strong>frontend developer</strong>, ambitious, curious and
              always ready to learn more. I enjoy working in a team and I
              consider myself a good communicator.
            </p>
          </div>
          <p className={classes.home__about__text}>
            I am currently looking for new opportunities to grow and make an
            impact in the tech world.
          </p>
          <p className={classes.home__about__text}>
            Feel free to reach out to me if you have any questions or just want
            to chat!
          </p>
          <p className={classes.home__about__text}>
            <strong>P.S:</strong> This website is mobile ready, check me out on
            your phone!
          </p>
        </div>
        <div className={classes.home__callToAction}>
          <CustomButton onClick={handleClick} className="btnLink">
            <Link className="linkButton" to="/contact">
              Lets talk
            </Link>
          </CustomButton>

          <CustomButton onClick={handleClick} className="secondary">
            <Link className="linkButton" to="/about">
              Get to know me
            </Link>
          </CustomButton>
        </div>
      </div>
    </>
  );
}

export default Homepage;
