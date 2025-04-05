import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 0 40px;
  background: ${props => props.theme === 'dark' ? '#0A0A0A' : '#FFFFFF'};

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  z-index: 1;
  padding: 100px 0;
`;

const Greeting = styled(motion.div)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.1rem;
  color: ${props => props.theme === 'dark' ? '#64FFDA' : '#0A0A0A'};
  letter-spacing: 5px;
  text-transform: uppercase;
  position: relative;
  display: inline-block;
  padding: 8px 16px;
  background: ${props => props.theme === 'dark' 
    ? 'rgba(100, 255, 218, 0.1)' 
    : 'rgba(10, 10, 10, 0.05)'};
  border-radius: 4px;
  backdrop-filter: blur(10px);
  border: 1px solid ${props => props.theme === 'dark' 
    ? 'rgba(100, 255, 218, 0.2)' 
    : 'rgba(10, 10, 10, 0.1)'};
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    letter-spacing: 3px;
  }
`;

const Name = styled(motion.h1)`
  font-family: 'Syncopate', sans-serif;
  font-size: clamp(4rem, 8vw, 7rem);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -3px;
  color: transparent;
  -webkit-text-stroke: ${props => props.theme === 'dark' ? '1px #FFFFFF' : '1px #0A0A0A'};
  position: relative;
  margin-bottom: 30px;
  display: inline-block;

  &::after {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
    color: ${props => props.theme === 'dark' ? '#64FFDA' : '#0A0A0A'};
    -webkit-text-stroke: 0px;
    border-right: 2px solid ${props => props.theme === 'dark' ? '#64FFDA' : '#0A0A0A'};
    overflow: hidden;
    animation: animate 6s linear infinite;
  }

  @keyframes animate {
    0%, 10%, 100% {
      width: 0;
    }
    70%, 90% {
      width: 100%;
    }
  }

  &::before {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 0;
    width: 200px;
    height: 2px;
    background: ${props => props.theme === 'dark' 
      ? 'linear-gradient(90deg, #64FFDA, transparent)' 
      : 'linear-gradient(90deg, #0A0A0A, transparent)'};
  }

  @media (max-width: 768px) {
    font-size: clamp(3rem, 6vw, 5rem);
  }
`;

const Title = styled(motion.h2)`
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 400;
  color: ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(10, 10, 10, 0.9)'};
  line-height: 1.3;
  margin-bottom: 40px;
  position: relative;
  padding-left: 30px;
  border-left: 4px solid ${props => props.theme === 'dark' ? '#64FFDA' : '#0A0A0A'};

  @media (max-width: 768px) {
    padding-left: 20px;
    border-left-width: 3px;
  }
`;

const Description = styled(motion.p)`
  font-family: 'Outfit', sans-serif;
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(10, 10, 10, 0.7)'};
  max-width: 700px;
  margin-bottom: 60px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 0;
    width: 100px;
    height: 1px;
    background: ${props => props.theme === 'dark' 
      ? 'rgba(100, 255, 218, 0.2)' 
      : 'rgba(10, 10, 10, 0.2)'};
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 20px;
  margin-top: 40px;
`;

const SocialLink = styled(motion.a)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: ${props => props.theme === 'dark' 
    ? 'rgba(100, 255, 218, 0.1)' 
    : 'rgba(10, 10, 10, 0.05)'};
  color: ${props => props.theme === 'dark' ? '#64FFDA' : '#0A0A0A'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  border: 1px solid ${props => props.theme === 'dark' 
    ? 'rgba(100, 255, 218, 0.2)' 
    : 'rgba(10, 10, 10, 0.1)'};
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px ${props => props.theme === 'dark'
    ? 'rgba(0, 0, 0, 0.2)'
    : 'rgba(0, 0, 0, 0.1)'};

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px ${props => props.theme === 'dark'
      ? 'rgba(0, 0, 0, 0.3)'
      : 'rgba(0, 0, 0, 0.15)'};
    border-color: ${props => props.theme === 'dark' ? '#64FFDA' : '#0A0A0A'};
  }

  svg {
    transition: all 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.2);
  }
`;

const DecorativeLine = styled(motion.div)`
  position: absolute;
  top: 50%;
  right: 0;
  width: 200px;
  height: 1px;
  background: ${props => props.theme === 'dark' 
    ? 'linear-gradient(90deg, transparent, #64FFDA)' 
    : 'linear-gradient(90deg, transparent, #0A0A0A)'};
  transform: translateY(-50%);

  @media (max-width: 1200px) {
    display: none;
  }
`;

const HomePage = () => {
  const { theme } = useTheme();
  
  return (
    <HomeContainer theme={theme}>
      <ContentWrapper>
        <Greeting
          theme={theme}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hello, I'm
        </Greeting>
        <Name
          theme={theme}
          data-text="Your Name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Your Name
        </Name>
        <Title
          theme={theme}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Crafting Digital Experiences through Code & Design
        </Title>
        <Description
          theme={theme}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          I'm a full-stack developer and designer passionate about creating elegant,
          intuitive, and high-performance digital solutions. Specializing in modern
          web technologies and user-centric design.
        </Description>
        <SocialLinks
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <SocialLink
            theme={theme}
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </SocialLink>
          <SocialLink
            theme={theme}
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </SocialLink>
          <SocialLink
            theme={theme}
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaTwitter />
          </SocialLink>
        </SocialLinks>
        <DecorativeLine
          theme={theme}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        />
      </ContentWrapper>
    </HomeContainer>
  );
};

export default HomePage;