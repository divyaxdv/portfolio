import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { createGlobalStyle } from 'styled-components';
import { FaArrowUp, FaMoon, FaSun } from 'react-icons/fa';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Space Grotesk', sans-serif;
    background: ${props => props.theme === 'dark' ? '#0A0A0A' : '#FFFFFF'};
    color: ${props => props.theme === 'dark' ? '#FFFFFF' : '#0A0A0A'};
    overflow-x: hidden;
    transition: background 0.3s ease;
  }

  ::-webkit-scrollbar {
    width: 8px;
    background: ${props => props.theme === 'dark' ? '#0A0A0A' : '#F0F0F0'};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme === 'dark' ? '#64FFDA' : '#0A0A0A'};
    border-radius: 4px;
  }

  ::selection {
    background: ${props => props.theme === 'dark' ? '#64FFDA' : '#0A0A0A'};
    color: ${props => props.theme === 'dark' ? '#0A0A0A' : '#FFFFFF'};
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  background: ${props => props.theme === 'dark' 
    ? `linear-gradient(to bottom, #0A0A0A, #1A1A1A),
       radial-gradient(circle at 20% 30%, rgba(100, 255, 218, 0.03) 0%, transparent 70%),
       radial-gradient(circle at 80% 70%, rgba(100, 255, 218, 0.03) 0%, transparent 70%)`
    : `linear-gradient(to bottom, #FFFFFF, #F8F8F8),
       radial-gradient(circle at 20% 30%, rgba(10, 10, 10, 0.02) 0%, transparent 70%),
       radial-gradient(circle at 80% 70%, rgba(10, 10, 10, 0.02) 0%, transparent 70%)`};
  color: ${props => props.theme === 'dark' ? '#FFFFFF' : '#0A0A0A'};
  transition: all 0.3s ease;
  position: relative;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => props.theme === 'dark'
      ? 'radial-gradient(circle at 50% 50%, rgba(100, 255, 218, 0.03) 0%, transparent 50%)'
      : 'radial-gradient(circle at 50% 50%, rgba(10, 10, 10, 0.02) 0%, transparent 50%)'};
    pointer-events: none;
  }
`;

const Navigation = styled(motion.nav)`
  position: fixed;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  background: ${props => props.theme === 'dark' 
    ? 'rgba(26, 26, 26, 0.9)' 
    : 'rgba(255, 255, 255, 0.9)'};
  backdrop-filter: blur(10px);
  border: 1px solid ${props => props.theme === 'dark' 
    ? 'rgba(100, 255, 218, 0.1)' 
    : 'rgba(10, 10, 10, 0.1)'};
  padding: 15px 30px;
  border-radius: 30px;
  z-index: 1000;
  box-shadow: 0 10px 30px ${props => props.theme === 'dark'
    ? 'rgba(0, 0, 0, 0.2)'
    : 'rgba(0, 0, 0, 0.1)'};
`;

const NavList = styled.ul`
  display: flex;
  gap: 40px;
  list-style: none;
`;

const NavItem = styled.li`
  position: relative;
`;

const NavLink = styled.a`
  font-family: 'Syncopate', sans-serif;
  color: ${props => props.theme === 'dark' ? '#FFFFFF' : '#0A0A0A'};
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 8px 0;
  transition: all 0.3s ease;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${props => props.theme === 'dark' ? '#64FFDA' : '#0A0A0A'};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
  }

  &:hover::before,
  &.active::before {
    transform: scaleX(1);
    transform-origin: left;
  }

  &.active {
    color: ${props => props.theme === 'dark' ? '#64FFDA' : '#0A0A0A'};
  }
`;

const ThemeToggle = styled(motion.button)`
  position: fixed;
  top: 40px;
  right: 40px;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: ${props => props.theme === 'dark' 
    ? 'rgba(26, 26, 26, 0.9)' 
    : 'rgba(255, 255, 255, 0.9)'};
  border: 1px solid ${props => props.theme === 'dark' 
    ? 'rgba(100, 255, 218, 0.1)' 
    : 'rgba(10, 10, 10, 0.1)'};
  backdrop-filter: blur(10px);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme === 'dark' ? '#64FFDA' : '#0A0A0A'};
  font-size: 1.2rem;
  z-index: 1001;
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

  svg {
    transition: all 0.3s ease;
  }

  &:hover svg {
    transform: rotate(180deg);
  }
`;

const ScrollToTop = styled(motion.button)`
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: ${props => props.theme === 'dark' 
    ? 'rgba(26, 26, 26, 0.9)' 
    : 'rgba(255, 255, 255, 0.9)'};
  border: 1px solid ${props => props.theme === 'dark' 
    ? 'rgba(100, 255, 218, 0.1)' 
    : 'rgba(10, 10, 10, 0.1)'};
  backdrop-filter: blur(10px);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme === 'dark' ? '#64FFDA' : '#0A0A0A'};
  font-size: 1.2rem;
  z-index: 1000;
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

const Section = styled.section`
  min-height: 100vh;
  padding: 100px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${props => props.theme === 'dark'
      ? 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(100, 255, 218, 0.03) 0%, transparent 50%)'
      : 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(10, 10, 10, 0.02) 0%, transparent 50%)'};
    pointer-events: none;
    transition: all 0.3s ease;
  }
`;

const AppContent = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
      
      const sections = ['home', 'about', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    const handleMouseMove = (e) => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        section.style.setProperty('--mouse-x', `${x}%`);
        section.style.setProperty('--mouse-y', `${y}%`);
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppContainer theme={theme}>
      <ThemeToggle
        theme={theme}
        onClick={toggleTheme}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
      >
        <FaMoon className="moon-icon" />
        <FaSun className="sun-icon" />
      </ThemeToggle>

      <Navigation theme={theme}>
        <NavList>
          <NavItem>
            <NavLink
              theme={theme}
              href="#home"
              className={activeSection === 'home' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              theme={theme}
              href="#about"
              className={activeSection === 'about' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
            >
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              theme={theme}
              href="#projects"
              className={activeSection === 'projects' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}
            >
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              theme={theme}
              href="#contact"
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              Contact
            </NavLink>
          </NavItem>
        </NavList>
      </Navigation>

      <AnimatePresence>
        {showScrollTop && (
          <ScrollToTop
            theme={theme}
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp />
          </ScrollToTop>
        )}
      </AnimatePresence>

      <Section id="home">
        <HomePage theme={theme} />
      </Section>

      <Section id="about">
        <AboutPage theme={theme} />
      </Section>

      <Section id="projects">
        <ProjectsPage theme={theme} />
      </Section>

      <Section id="contact">
        <ContactPage theme={theme} />
      </Section>
    </AppContainer>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
