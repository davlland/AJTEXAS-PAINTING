import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const variants = {
  hidden: (direction = "y") => ({
    opacity: 0,
    y: direction === "y" ? 30 : 0,
    x: direction === "x" ? -30 : 0,
  }),
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ScrollReveal = ({ children, direction = "y", className = "", ...props }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={controls}
      custom={direction}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal; 