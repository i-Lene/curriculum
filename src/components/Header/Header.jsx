import classes from "./Header.module.scss";
import HeaderLinks from "./HeaderLinks";
import { useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropDownAnimationClose = { opacity: 0, y: -6 };
  const dropDownAnimationOpen = { opacity: 1, y: 25 };

  function toggleBurgerMenu() {
    setIsDropdownOpen((prev) => !prev);
  }

  function closeMenu() {
    setIsDropdownOpen(false);
  }

  return (
    <header className={`${classes.header} ${isDropdownOpen ? classes.open : ""}`}>
      {" "}
      <Link className={classes.logo} to={"/"}>
        <h1>Marlene.</h1>
      </Link>
      <div className={classes.headerLinksDesktop}>
        <HeaderLinks />
      </div>
      <div className={classes.headerLinksMobile}>
        <div className={classes.burger}>
          {isDropdownOpen && (
            <div className={classes.overlay} onClick={closeMenu} />
          )}

          <motion.button
            className={classes.burgerIcon}
            onClick={toggleBurgerMenu}
            initial={false}
            animate={isDropdownOpen ? "open" : "closed"}
          >
            <motion.span
              className={classes.bar}
              variants={{
                open: { rotate: 45, y: 16 },
                closed: { rotate: 0, y: 0 },
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className={classes.bar}
              variants={{
                open: { opacity: 0 },
                closed: { opacity: 1 },
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className={classes.bar}
              variants={{
                open: { rotate: -45, y: -8 },
                closed: { rotate: 0, y: 0 },
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.div
            className={classes.burgerDropdown}
            initial={dropDownAnimationClose}
            animate={
              isDropdownOpen ? dropDownAnimationOpen : dropDownAnimationClose
            }
            transition={{ duration: 0.3 }}
          >
            <HeaderLinks closeMenu={closeMenu} />
          </motion.div>
        </div>
      </div>
    </header>
  );
}
