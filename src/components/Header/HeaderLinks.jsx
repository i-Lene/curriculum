import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import HeaderLink from "./HeaderLink";
import classes from "./Header.module.scss";
import { motion } from "framer-motion"; // fixed incorrect import
import { useEffect, useState } from "react";

function HeaderLinks({ closeMenu }) {
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
        <HeaderLink path="/" name="Home" closeMenu={closeMenu} />
        <HeaderLink path="/about" name="About" closeMenu={closeMenu} />
        <HeaderLink path="/portfolio" name="Portfolio" closeMenu={closeMenu} />
        <HeaderLink path="/contact" name="Contact" closeMenu={closeMenu} />
      </ul>

      <motion.div
        style={{ transformOrigin: "center" }}
        {...motionProps}
        className={classes.gitHubLink}
      >
        <a
          style={{ color: "#5c4b4b" }}
          href="https://github.com/i-Lene"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </motion.div>
    </nav>
  );
}

export default HeaderLinks;
