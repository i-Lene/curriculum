import { NavLink } from "react-router";
import classes from "./Header.module.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeaderLink({ path, name, icon, closeMenu }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 1025);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const motionProps = isMobile
    ? {}
    : { whileHover: { scale: 1.1 }, whileTap: { scale: 0.95 } };

  return (
    <motion.div style={{ transformOrigin: "center" }} {...motionProps}>
      <NavLink
        to={path}
        className={classes.headerLink}
        onClick={() => {
          if (isMobile && closeMenu) closeMenu();
        }}
        style={({ isActive }) => ({
          color: isActive ? "#d4a5a5" : "#5c4b4b",
        })}
      >
        {icon && <span className="icon">{icon}</span>}
        {name}
      </NavLink>
    </motion.div>
  );
}
