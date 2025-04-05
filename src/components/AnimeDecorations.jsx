import styled from 'styled-components';
import { motion } from 'framer-motion';

const DecorationWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
`;

const Kunai = styled(motion.svg)`
  position: absolute;
  width: 40px;
  height: 40px;
`;

const CherryBlossom = styled(motion.svg)`
  position: absolute;
  width: 30px;
  height: 30px;
`;

const AnimeSparkle = styled(motion.svg)`
  position: absolute;
  width: 20px;
  height: 20px;
`;

const decorationPositions = [
  { top: '10%', left: '5%' },
  { top: '20%', right: '10%' },
  { bottom: '15%', left: '8%' },
  { bottom: '25%', right: '15%' },
  { top: '40%', left: '15%' },
  { top: '60%', right: '8%' },
  { bottom: '30%', left: '20%' },
  { top: '15%', right: '25%' },
];

export const AnimeDecorations = () => {
  return (
    <DecorationWrapper>
      {decorationPositions.map((pos, index) => (
        <div key={index} style={{ position: 'absolute', ...pos }}>
          {index % 3 === 0 && (
            <Kunai
              viewBox="0 0 24 24"
              initial={{ rotate: 0, scale: 0 }}
              animate={{ 
                rotate: 360,
                scale: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: index * 0.2,
              }}
            >
              <path
                d="M12 2L14 14L22 16L14 18L12 22L10 18L2 16L10 14L12 2Z"
                fill="#ffd93d"
                stroke="#ff6b6b"
                strokeWidth="1"
              />
            </Kunai>
          )}
          {index % 3 === 1 && (
            <CherryBlossom
              viewBox="0 0 24 24"
              initial={{ scale: 0, rotate: 0 }}
              animate={{ 
                scale: [0.8, 1, 0.8],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: index * 0.3,
              }}
            >
              <path
                d="M12 2C12 2 14 6 14 8C14 10 12 11 12 11C12 11 10 10 10 8C10 6 12 2 12 2Z"
                fill="#ff6b6b"
              />
              <path
                d="M12 2C12 2 16 4 17 6C18 8 16 10 16 10C16 10 14 9 13 7C12 5 12 2 12 2Z"
                fill="#ff6b6b"
              />
              <path
                d="M12 2C12 2 8 4 7 6C6 8 8 10 8 10C8 10 10 9 11 7C12 5 12 2 12 2Z"
                fill="#ff6b6b"
              />
            </CherryBlossom>
          )}
          {index % 3 === 2 && (
            <AnimeSparkle
              viewBox="0 0 24 24"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0.5, 1, 0.5],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: index * 0.4,
              }}
            >
              <path
                d="M12 2L13.5 9L20 12L13.5 15L12 22L10.5 15L4 12L10.5 9L12 2Z"
                fill="#4ecdc4"
                stroke="#ffffff"
                strokeWidth="0.5"
              />
            </AnimeSparkle>
          )}
        </div>
      ))}
    </DecorationWrapper>
  );
};

// Dragon Scroll decoration
export const DragonScroll = styled(motion.div)`
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 40px;
  background: #ffd93d;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  color: #1a1a2e;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  
  &:before, &:after {
    content: '';
    position: absolute;
    width: 20px;
    height: 100%;
    background: #ff6b6b;
    border-radius: 10px;
  }
  
  &:before {
    left: -10px;
  }
  
  &:after {
    right: -10px;
  }
`; 