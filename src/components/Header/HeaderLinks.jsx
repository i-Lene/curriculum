import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import HeaderLink from "./HeaderLink";
import classes from "./Header.module.scss";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

function HeaderLinks() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 1025);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const motionProps = isMobile
    ? {}
    : { whileHover: { scale: 1.2, color: "#d4a5a5" } };

  return (
    <nav className={classes.navbar}>
      <ul>
        <HeaderLink path="/" name="Home" />
        <HeaderLink path="/about" name="About" />
        <HeaderLink path="/portfolio" name="Portfolio" />
        <HeaderLink path="/contact" name="Contact" />
      </ul>
      <motion.div
        style={{ transformOrigin: "center" }}
        {...motionProps}
        className={classes.gitHubLink}
      >
        <motion.a
          style={{ transformOrigin: "center", color: "#5c4b4b" }}
          {...motionProps}
          href="https://github.com/i-Lene"
          target="_blank"
        >
          {<FontAwesomeIcon icon={faGithub} />}
        </motion.a>
      </motion.div>
    </nav>
  );
}

export default HeaderLinks;
