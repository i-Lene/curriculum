import { useEffect, useState } from "react";
import { motion } from "motion/react";

function CustomButton({ children, onClick, className, ...props }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 1025);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const whileHoverEffect = isMobile
    ? {}
    : {
        scale: 1.05,
        transition: {
          duration: 0.3,
          type: "spring",
        },
      };

  const whileTapEffect = isMobile
    ? {}
    : {
        scale: 0.95,
        transition: {
          duration: 0.3,
          type: "spring",
        },
      };

  return (
    <motion.button
      className={className}
      onClick={onClick}
      whileHover={whileHoverEffect}
      whileTap={whileTapEffect}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default CustomButton;
