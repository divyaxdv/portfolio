import styled from 'styled-components';
import { motion } from 'framer-motion';

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  width: 100px;
  height: 100px;
  opacity: 0.1;
`;

const Kunai = () => (
  <svg viewBox="0 0 100 100" width="100%" height="100%">
    <motion.path
      d="M50 10 L60 40 L50 70 L40 40 Z"
      fill="none"
      stroke="#ffd93d"
      strokeWidth="2"
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    />
    <motion.path
      d="M50 70 L60 90 L50 95 L40 90 Z"
      fill="none"
      stroke="#ffd93d"
      strokeWidth="2"
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    />
  </svg>
);

const CherryBlossom = () => (
  <svg viewBox="0 0 100 100" width="100%" height="100%">
    <motion.g
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      {[...Array(5)].map((_, i) => (
        <motion.path
          key={i}
          d="M50 20 C60 20, 60 40, 50 40 C40 40, 40 20, 50 20"
          fill="none"
          stroke="#ff6b6b"
          strokeWidth="2"
          transform={`rotate(${i * 72}, 50, 50)`}
        />
      ))}
    </motion.g>
  </svg>
);

const DragonScroll = () => (
  <svg viewBox="0 0 100 100" width="100%" height="100%">
    <motion.path
      d="M20 20 L80 20 L80 80 L20 80 Z"
      fill="none"
      stroke="#ffd93d"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.path
      d="M30 30 L70 30 L70 70 L30 70 Z"
      fill="none"
      stroke="#ffd93d"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
    />
  </svg>
);

const AnimeBackground = () => {
  return (
    <BackgroundContainer>
      {[...Array(6)].map((_, i) => (
        <FloatingElement
          key={`kunai-${i}`}
          initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
          animate={{
            x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
            y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Kunai />
        </FloatingElement>
      ))}
      
      {[...Array(4)].map((_, i) => (
        <FloatingElement
          key={`blossom-${i}`}
          initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
          animate={{
            x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
            y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <CherryBlossom />
        </FloatingElement>
      ))}
      
      {[...Array(3)].map((_, i) => (
        <FloatingElement
          key={`scroll-${i}`}
          initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
          animate={{
            x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
            y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
          }}
          transition={{
            duration: 25 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <DragonScroll />
        </FloatingElement>
      ))}
    </BackgroundContainer>
  );
};

export default AnimeBackground; 