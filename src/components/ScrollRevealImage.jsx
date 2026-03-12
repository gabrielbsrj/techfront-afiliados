"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

export default function ScrollRevealImage({ 
  src, 
  alt, 
  caption, 
  animationType = "fade-up", // fade-up, scale, parallax
  speed = 0.5,
  className = ""
}) {
  const containerRef = useRef(null);
  
  // Para Fade e Scale: InView (quando entra na tela)
  const isInView = useInView(containerRef, { once: true, margin: "-100px 0px" });

  // Para Parallax: Posição do Scroll Global
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Cálculo da distância do Parallax (Y)
  const yParallax = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);

  // Variações de Animações
  const variants = {
    "fade-up": {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }
    },
    "scale": {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }
    }
  };

  const selectedAnimation = animationType === "parallax" 
    ? { style: { y: yParallax } } // Aplica estilo inline dinâmico atrelado ao scroll
    : {
        variants: variants[animationType],
        initial: "initial",
        animate: "animate",
        transition: { duration: 0.8, ease: "easeOut" }
      };

  return (
    <div 
      ref={containerRef} 
      className={`scroll-reveal-container ${className}`}
      style={{ 
        position: "relative", 
        width: "100%", 
        overflow: "hidden",
        borderRadius: "16px",
        margin: "2rem 0"
      }}
    >
      <motion.div 
        {...selectedAnimation}
        style={{
           width: "100%",
           height: "100%",
           ...(animationType === "parallax" ? selectedAnimation.style : {})
        }}
      >
        <img 
          src={src} 
          alt={alt} 
          style={{ 
            width: "100%", 
            height: "auto", 
            display: "block", 
            objectFit: "cover" 
          }} 
        />
      </motion.div>

      {caption && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            padding: "1rem",
            background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
            color: "white",
            fontSize: "0.9rem",
            textAlign: "center"
          }}
        >
          {caption}
        </motion.div>
      )}
    </div>
  );
}
