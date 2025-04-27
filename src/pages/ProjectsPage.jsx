import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
`;

const SectionTitle = styled(motion.h2)`
  font-family: 'Syncopate', sans-serif;
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 700;
  margin-bottom: 60px;
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 40px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${props => props.theme === 'dark' 
    ? 'rgba(26, 26, 26, 0.9)' 
    : 'rgba(255, 255, 255, 0.9)'};
  backdrop-filter: blur(10px);
  border: 1px solid ${props => props.theme === 'dark' 
    ? 'rgba(100, 255, 218, 0.1)' 
    : 'rgba(10, 10, 10, 0.1)'};
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px ${props => props.theme === 'dark'
    ? 'rgba(0, 0, 0, 0.2)'
    : 'rgba(0, 0, 0, 0.1)'};

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px ${props => props.theme === 'dark'
      ? 'rgba(0, 0, 0, 0.3)'
      : 'rgba(0, 0, 0, 0.15)'};
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${props => props.theme === 'dark'
      ? 'linear-gradient(210deg, rgba(100, 255, 218, 0.1), transparent 50%)'
      : 'linear-gradient(210deg, rgba(10, 10, 10, 0.05), transparent 50%)'};
    z-index: 2;
  }*/

  ${ProjectCard}:hover & img {
    transform: scale(1.1);
  }
`;

const ProjectContent = styled.div`
  padding: 30px;
`;

const ProjectTitle = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5rem;
  color: ${props => props.theme === 'dark' ? '#64FFDA' : '#0A0A0A'};
  margin-bottom: 15px;
`;

const ProjectDescription = styled.p`
  font-family: 'Outfit', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  color: ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(10, 10, 10, 0.7)'};
  margin-bottom: 20px;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 25px;
`;

const TechBadge = styled.span`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.8rem;
  color: ${props => props.theme === 'dark' ? '#64FFDA' : '#0A0A0A'};
  padding: 5px 12px;
  border-radius: 15px;
  background: ${props => props.theme === 'dark' 
    ? 'rgba(100, 255, 218, 0.1)' 
    : 'rgba(10, 10, 10, 0.05)'};
  border: 1px solid ${props => props.theme === 'dark' 
    ? 'rgba(100, 255, 218, 0.2)' 
    : 'rgba(10, 10, 10, 0.1)'};
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const ProjectLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.9rem;
  color: ${props => props.theme === 'dark' ? '#64FFDA' : '#0A0A0A'};
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 20px;
  background: ${props => props.theme === 'dark' 
    ? 'rgba(100, 255, 218, 0.1)' 
    : 'rgba(10, 10, 10, 0.05)'};
  border: 1px solid ${props => props.theme === 'dark' 
    ? 'rgba(100, 255, 218, 0.2)' 
    : 'rgba(10, 10, 10, 0.1)'};
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme === 'dark' 
      ? 'rgba(100, 255, 218, 0.2)' 
      : 'rgba(10, 10, 10, 0.1)'};
    transform: translateY(-3px);
  }

  svg {
    font-size: 1rem;
  }
`;

const ProjectsPage = () => {
  const { theme } = useTheme();
  
  const projects = [
    {
      title: 'Docs',
      description: 'Developed an online document creator (something like google docs) using React-Quill library that can add text, image, list, code snippet etc.',
      image: 'image/Screenshot 2025-04-27 232721.png',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io', 'Typecript'],
      github: 'https://github.com/ayush-AI/docs-client',
      live: 'https://docs-client.vercel.app/document/15cbbada-0cf9-462e-9bf3-8f35242a242a'
    },
    {
      title: 'GDG Cloud Kolkata Webite',
      description: 'Build website for Google Developer Group Cloud Kolkata Community one of the biggest community in the eastern India.',
      //image: '/project2.jpg',
      tech: ['React.js', 'typescript', 'Material-UI'],
      github: 'https://github.com/gdgcloudkol/gdgcloudkol.github.io',
      live: 'https://gdgcloud.kolkata.dev/'
    },
    {
      title: 'Winter of Code`21',
      description: 'Created an website for an open source event named Winter of Code which creates awareness about open source opportunities like GSOC.',
      image: 'image/Screenshot 2025-04-27 233525.png',
      tech: ['React', 'Github Pages', 'Cloudflare', 'Material-UI'],
      github: 'https://github.com/winterofcode/2021',
      live: 'https://winterofcode.com/2021/'
    }
  ];

  return (
    <ProjectsContainer>
      <SectionTitle
        theme={theme}
        data-text="Projects"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </SectionTitle>

      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            theme={theme}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <ProjectImage theme={theme}>
              <img src={project.image} alt={project.title} />
            </ProjectImage>
            <ProjectContent>
              <ProjectTitle theme={theme}>{project.title}</ProjectTitle>
              <ProjectDescription theme={theme}>
                {project.description}
              </ProjectDescription>
              <TechStack>
                {project.tech.map((tech, techIndex) => (
                  <TechBadge key={techIndex} theme={theme}>
                    {tech}
                  </TechBadge>
                ))}
              </TechStack>
              <ProjectLinks>
                <ProjectLink
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  theme={theme}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub /> Code
                </ProjectLink>
                <ProjectLink
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  theme={theme}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt /> Live
                </ProjectLink>
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default ProjectsPage; 