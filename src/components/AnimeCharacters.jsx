import styled from 'styled-components';
import { motion } from 'framer-motion';

const CharacterContainer = styled(motion.div)`
  width: 200px;
  height: 200px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GojoSatoru = () => (
  <svg viewBox="0 0 200 200" width="100%" height="100%">
    <motion.g
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Head */}
      <circle cx="100" cy="80" r="40" fill="#fff" stroke="#000" strokeWidth="2" />
      
      {/* Hair */}
      <path
        d="M60 80 C60 40, 140 40, 140 80"
        fill="none"
        stroke="#000"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M70 60 C70 30, 130 30, 130 60"
        fill="none"
        stroke="#000"
        strokeWidth="3"
        strokeLinecap="round"
      />
      
      {/* Eyes */}
      <motion.g
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <circle cx="85" cy="75" r="8" fill="#fff" stroke="#000" strokeWidth="2" />
        <circle cx="115" cy="75" r="8" fill="#fff" stroke="#000" strokeWidth="2" />
        <circle cx="85" cy="75" r="4" fill="#000" />
        <circle cx="115" cy="75" r="4" fill="#000" />
        <path
          d="M80 70 L90 70 M110 70 L120 70"
          stroke="#000"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </motion.g>
      
      {/* Smile */}
      <path
        d="M85 90 Q100 100 115 90"
        fill="none"
        stroke="#000"
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      {/* Infinity Symbol */}
      <motion.path
        d="M70 120 C70 100, 130 100, 130 120 C130 140, 70 140, 70 120"
        fill="none"
        stroke="#ffd93d"
        strokeWidth="3"
        strokeLinecap="round"
        animate={{
          strokeDasharray: [0, 1000],
          strokeDashoffset: [0, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.path
        d="M75 125 C75 105, 125 105, 125 125 C125 145, 75 145, 75 125"
        fill="none"
        stroke="#ffd93d"
        strokeWidth="2"
        strokeLinecap="round"
        animate={{
          strokeDasharray: [0, 1000],
          strokeDashoffset: [0, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          delay: 0.5
        }}
      />
    </motion.g>
  </svg>
);

const ErenYeager = () => (
  <svg viewBox="0 0 200 200" width="100%" height="100%">
    <motion.g
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Head */}
      <circle cx="100" cy="80" r="40" fill="#fff" stroke="#000" strokeWidth="2" />
      
      {/* Hair */}
      <path
        d="M60 80 C60 40, 140 40, 140 80"
        fill="none"
        stroke="#000"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M70 60 C70 30, 130 30, 130 60"
        fill="none"
        stroke="#000"
        strokeWidth="3"
        strokeLinecap="round"
      />
      
      {/* Eyes */}
      <motion.g
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <circle cx="85" cy="75" r="8" fill="#fff" stroke="#000" strokeWidth="2" />
        <circle cx="115" cy="75" r="8" fill="#fff" stroke="#000" strokeWidth="2" />
        <circle cx="85" cy="75" r="4" fill="#000" />
        <circle cx="115" cy="75" r="4" fill="#000" />
        <path
          d="M80 70 L90 70 M110 70 L120 70"
          stroke="#000"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </motion.g>
      
      {/* Scarf */}
      <path
        d="M80 100 C80 120, 120 120, 120 100"
        fill="none"
        stroke="#ff6b6b"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M85 105 C85 125, 115 125, 115 105"
        fill="none"
        stroke="#ff6b6b"
        strokeWidth="3"
        strokeLinecap="round"
      />
      
      {/* Wings of Freedom */}
      <motion.path
        d="M60 140 L100 160 L140 140"
        fill="none"
        stroke="#ffd93d"
        strokeWidth="3"
        strokeLinecap="round"
        animate={{
          y: [0, -10, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.path
        d="M65 145 L100 165 L135 145"
        fill="none"
        stroke="#ffd93d"
        strokeWidth="2"
        strokeLinecap="round"
        animate={{
          y: [0, -8, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3
        }}
      />
    </motion.g>
  </svg>
);

const HinataShoyo = () => (
  <svg viewBox="0 0 200 200" width="100%" height="100%">
    <motion.g
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Head */}
      <circle cx="100" cy="80" r="40" fill="#fff" stroke="#000" strokeWidth="2" />
      
      {/* Hair */}
      <path
        d="M60 80 C60 40, 140 40, 140 80"
        fill="none"
        stroke="#ff6b6b"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M70 60 C70 30, 130 30, 130 60"
        fill="none"
        stroke="#ff6b6b"
        strokeWidth="3"
        strokeLinecap="round"
      />
      
      {/* Eyes */}
      <motion.g
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <circle cx="85" cy="75" r="8" fill="#fff" stroke="#000" strokeWidth="2" />
        <circle cx="115" cy="75" r="8" fill="#fff" stroke="#000" strokeWidth="2" />
        <circle cx="85" cy="75" r="4" fill="#000" />
        <circle cx="115" cy="75" r="4" fill="#000" />
        <path
          d="M80 70 L90 70 M110 70 L120 70"
          stroke="#000"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </motion.g>
      
      {/* Volleyball */}
      <motion.circle
        cx="100"
        cy="160"
        r="20"
        fill="#fff"
        stroke="#000"
        strokeWidth="2"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 360]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <path
        d="M100 140 L100 160 L120 150 Z"
        fill="#000"
      />
      <path
        d="M90 150 L110 150"
        stroke="#000"
        strokeWidth="1"
      />
      <path
        d="M95 145 L105 155"
        stroke="#000"
        strokeWidth="1"
      />
      <path
        d="M95 155 L105 145"
        stroke="#000"
        strokeWidth="1"
      />
    </motion.g>
  </svg>
);

export { GojoSatoru, ErenYeager, HinataShoyo };