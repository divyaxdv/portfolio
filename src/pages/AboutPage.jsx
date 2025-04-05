import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const AboutContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
  position: relative;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`;

const Section = styled(motion.section)`
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled(motion.h2)`
  font-family: 'Syncopate', sans-serif;
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 700;
  margin-bottom: 40px;
  color: transparent;
  -webkit-text-stroke: ${props => props.theme === 'dark' ? '1px #FFFFFF' : '1px #0A0A0A'};
  position: relative;
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
`;

const ContentCard = styled(motion.div)`
  background: ${props => props.theme === 'dark' 
    ? 'rgba(26, 26, 26, 0.9)' 
    : 'rgba(255, 255, 255, 0.9)'};
  backdrop-filter: blur(10px);
  border: 1px solid ${props => props.theme === 'dark' 
    ? 'rgba(100, 255, 218, 0.1)' 
    : 'rgba(10, 10, 10, 0.1)'};
  border-radius: 20px;
  padding: 40px;
  margin-bottom: 40px;
  box-shadow: 0 10px 30px ${props => props.theme === 'dark'
    ? 'rgba(0, 0, 0, 0.2)'
    : 'rgba(0, 0, 0, 0.1)'};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px ${props => props.theme === 'dark'
      ? 'rgba(0, 0, 0, 0.3)'
      : 'rgba(0, 0, 0, 0.15)'};
  }
`;

const Text = styled.p`
  font-family: 'Outfit', sans-serif;
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(10, 10, 10, 0.7)'};
  margin-bottom: 20px;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 20px;
  margin-top: 40px;
`;

const SkillCard = styled(motion.div)`
  background: ${props => props.theme === 'dark' 
    ? 'rgba(26, 26, 26, 0.9)' 
    : 'rgba(255, 255, 255, 0.9)'};
  backdrop-filter: blur(10px);
  border: 1px solid ${props => props.theme === 'dark' 
    ? 'rgba(100, 255, 218, 0.1)' 
    : 'rgba(10, 10, 10, 0.1)'};
  border-radius: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px ${props => props.theme === 'dark'
    ? 'rgba(0, 0, 0, 0.2)'
    : 'rgba(0, 0, 0, 0.1)'};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px ${props => props.theme === 'dark'
      ? 'rgba(0, 0, 0, 0.3)'
      : 'rgba(0, 0, 0, 0.15)'};
    border-color: ${props => props.theme === 'dark' ? '#64FFDA' : '#0A0A0A'};
  }
`;

const SkillIcon = styled.div`
  font-size: 2rem;
  color: ${props => props.theme === 'dark' ? '#64FFDA' : '#0A0A0A'};
`;

const SkillName = styled.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.9rem;
  color: ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(10, 10, 10, 0.9)'};
  text-align: center;
`;

const ExperienceCard = styled(motion.div)`
  background: ${props => props.theme === 'dark' 
    ? 'rgba(26, 26, 26, 0.9)' 
    : 'rgba(255, 255, 255, 0.9)'};
  backdrop-filter: blur(10px);
  border: 1px solid ${props => props.theme === 'dark' 
    ? 'rgba(100, 255, 218, 0.1)' 
    : 'rgba(10, 10, 10, 0.1)'};
  border-radius: 20px;
  padding: 30px;
  margin-bottom: 30px;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px ${props => props.theme === 'dark'
    ? 'rgba(0, 0, 0, 0.2)'
    : 'rgba(0, 0, 0, 0.1)'};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px ${props => props.theme === 'dark'
      ? 'rgba(0, 0, 0, 0.3)'
      : 'rgba(0, 0, 0, 0.15)'};
  }
`;

const ExperienceTitle = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.2rem;
  color: ${props => props.theme === 'dark' ? '#64FFDA' : '#0A0A0A'};
  margin-bottom: 10px;
`;

const ExperienceDate = styled.span`
  font-family: 'Outfit', sans-serif;
  font-size: 0.9rem;
  color: ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(10, 10, 10, 0.5)'};
  margin-bottom: 15px;
  display: block;
`;

const ExperienceDescription = styled.p`
  font-family: 'Outfit', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(10, 10, 10, 0.7)'};
`;

const AboutPage = () => {
  const { theme } = useTheme();
  
  return (
    <AboutContainer>
      <Section>
        <SectionTitle
          theme={theme}
          data-text="About Me"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </SectionTitle>
        
        <ContentCard
          theme={theme}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Text theme={theme}>
            I'm a passionate full-stack developer with a keen eye for design and user experience.
            My journey in technology began with a curiosity for how things work, which evolved
            into a deep love for creating elegant and efficient solutions.
          </Text>
          <Text theme={theme}>
            With expertise in both frontend and backend development, I specialize in building
            modern web applications that are not only visually appealing but also performant
            and scalable. I believe in writing clean, maintainable code and following best
            practices to deliver high-quality products.
          </Text>
        </ContentCard>

        <SectionTitle
          theme={theme}
          data-text="Skills"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Skills
        </SectionTitle>

        <SkillsGrid>
          {['React', 'Node.js', 'TypeScript', 'Python', 'SQL', 'AWS', 'Docker', 'Git'].map((skill, index) => (
            <SkillCard
              key={skill}
              theme={theme}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <SkillIcon theme={theme}>⚡</SkillIcon>
              <SkillName theme={theme}>{skill}</SkillName>
            </SkillCard>
          ))}
        </SkillsGrid>
      </Section>

      <Section>
        <SectionTitle
          theme={theme}
          data-text="Experience"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Experience
        </SectionTitle>

        <ExperienceCard
          theme={theme}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <ExperienceTitle theme={theme}>Senior Full Stack Developer</ExperienceTitle>
          <ExperienceDate theme={theme}>2020 - Present</ExperienceDate>
          <ExperienceDescription theme={theme}>
            Leading the development of enterprise-level web applications, implementing
            modern architectures and best practices. Collaborating with cross-functional
            teams to deliver high-quality solutions.
          </ExperienceDescription>
        </ExperienceCard>

        <ExperienceCard
          theme={theme}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <ExperienceTitle theme={theme}>Frontend Developer</ExperienceTitle>
          <ExperienceDate theme={theme}>2018 - 2020</ExperienceDate>
          <ExperienceDescription theme={theme}>
            Developed responsive and interactive user interfaces for various web applications.
            Implemented modern frontend technologies and optimized performance.
          </ExperienceDescription>
        </ExperienceCard>
      </Section>
    </AboutContainer>
  );
};

export default AboutPage; 