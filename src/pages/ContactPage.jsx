import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const ContactContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  position: relative;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    gap: 60px;
    padding: 0 30px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
    gap: 40px;
  }
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

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }

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

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const ContactCard = styled(motion.div)`
  background: ${props => props.theme === 'dark' 
    ? 'rgba(26, 26, 26, 0.9)' 
    : 'rgba(255, 255, 255, 0.9)'};
  backdrop-filter: blur(10px);
  border: 1px solid ${props => props.theme === 'dark' 
    ? 'rgba(100, 255, 218, 0.1)' 
    : 'rgba(10, 10, 10, 0.1)'};
  border-radius: 20px;
  padding: 30px;
  display: flex;
  align-items: center;
  gap: 20px;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px ${props => props.theme === 'dark'
    ? 'rgba(0, 0, 0, 0.2)'
    : 'rgba(0, 0, 0, 0.1)'};

  @media (max-width: 768px) {
    padding: 20px;
    gap: 15px;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px ${props => props.theme === 'dark'
      ? 'rgba(0, 0, 0, 0.3)'
      : 'rgba(0, 0, 0, 0.15)'};
  }
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: ${props => props.theme === 'dark' 
    ? 'rgba(100, 255, 218, 0.1)' 
    : 'rgba(10, 10, 10, 0.05)'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme === 'dark' ? '#64FFDA' : '#0A0A0A'};
  font-size: 1.2rem;
  border: 1px solid ${props => props.theme === 'dark' 
    ? 'rgba(100, 255, 218, 0.2)' 
    : 'rgba(10, 10, 10, 0.1)'};

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
`;

const ContactText = styled.div`
  h3 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.2rem;
    color: ${props => props.theme === 'dark' ? '#64FFDA' : '#0A0A0A'};
    margin-bottom: 5px;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  p {
    font-family: 'Outfit', sans-serif;
    font-size: 1rem;
    color: ${props => props.theme === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(10, 10, 10, 0.7)'};

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

const FormContainer = styled(motion.form)`
  background: ${props => props.theme === 'dark' 
    ? 'rgba(26, 26, 26, 0.9)' 
    : 'rgba(255, 255, 255, 0.9)'};
  backdrop-filter: blur(10px);
  border: 1px solid ${props => props.theme === 'dark' 
    ? 'rgba(100, 255, 218, 0.1)' 
    : 'rgba(10, 10, 10, 0.1)'};
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 30px ${props => props.theme === 'dark'
    ? 'rgba(0, 0, 0, 0.2)'
    : 'rgba(0, 0, 0, 0.1)'};

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 30px;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const Label = styled.label`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.9rem;
  color: ${props => props.theme === 'dark' ? '#64FFDA' : '#0A0A0A'};
  margin-bottom: 10px;
  display: block;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid ${props => props.theme === 'dark' 
    ? 'rgba(100, 255, 218, 0.2)' 
    : 'rgba(10, 10, 10, 0.1)'};
  background: ${props => props.theme === 'dark' 
    ? 'rgba(100, 255, 218, 0.05)' 
    : 'rgba(10, 10, 10, 0.02)'};
  color: ${props => props.theme === 'dark' ? '#FFFFFF' : '#0A0A0A'};
  font-family: 'Outfit', sans-serif;
  font-size: 1rem;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 12px;
    font-size: 0.9rem;
  }

  &:focus {
    outline: none;
    border-color: ${props => props.theme === 'dark' ? '#64FFDA' : '#0A0A0A'};
    box-shadow: 0 0 0 2px ${props => props.theme === 'dark' 
      ? 'rgba(100, 255, 218, 0.2)' 
      : 'rgba(10, 10, 10, 0.1)'};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid ${props => props.theme === 'dark' 
    ? 'rgba(100, 255, 218, 0.2)' 
    : 'rgba(10, 10, 10, 0.1)'};
  background: ${props => props.theme === 'dark' 
    ? 'rgba(100, 255, 218, 0.05)' 
    : 'rgba(10, 10, 10, 0.02)'};
  color: ${props => props.theme === 'dark' ? '#FFFFFF' : '#0A0A0A'};
  font-family: 'Outfit', sans-serif;
  font-size: 1rem;
  resize: none;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    height: 120px;
    padding: 12px;
    font-size: 0.9rem;
  }

  &:focus {
    outline: none;
    border-color: ${props => props.theme === 'dark' ? '#64FFDA' : '#0A0A0A'};
    box-shadow: 0 0 0 2px ${props => props.theme === 'dark' 
      ? 'rgba(100, 255, 218, 0.2)' 
      : 'rgba(10, 10, 10, 0.1)'};
  }
`;

const SubmitButton = styled(motion.button)`
  background: ${props => props.theme === 'dark' 
    ? 'rgba(100, 255, 218, 0.1)' 
    : 'rgba(10, 10, 10, 0.05)'};
  color: ${props => props.theme === 'dark' ? '#64FFDA' : '#0A0A0A'};
  border: 1px solid ${props => props.theme === 'dark' 
    ? 'rgba(100, 255, 218, 0.2)' 
    : 'rgba(10, 10, 10, 0.1)'};
  padding: 15px 30px;
  border-radius: 10px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;

  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 0.9rem;
  }

  &:hover {
    background: ${props => props.theme === 'dark' 
      ? 'rgba(100, 255, 218, 0.2)' 
      : 'rgba(10, 10, 10, 0.1)'};
    transform: translateY(-3px);
  }
`;

const ContactPage = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <ContactContainer>
      <ContactInfo>
        <SectionTitle
          theme={theme}
          data-text="Get in Touch"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </SectionTitle>

        <ContactCard
          theme={theme}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ContactIcon theme={theme}>
            <FaEnvelope />
          </ContactIcon>
          <ContactText theme={theme}>
            <h3>Email</h3>
            <p>ayushmishra2854@gmail.com</p>
          </ContactText>
        </ContactCard>

        <ContactCard
          theme={theme}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ContactIcon theme={theme}>
            <FaPhone />
          </ContactIcon>
          <ContactText theme={theme}>
            <h3>Phone</h3>
            <p>+91 9123155486</p>
          </ContactText>
        </ContactCard>

        <ContactCard
          theme={theme}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <ContactIcon theme={theme}>
            <FaMapMarkerAlt />
          </ContactIcon>
          <ContactText theme={theme}>
            <h3>Location</h3>
            <p>India</p>
          </ContactText>
        </ContactCard>
      </ContactInfo>

      <FormContainer
        theme={theme}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        onSubmit={handleSubmit}
      >
        <FormGroup>
          <Label theme={theme}>Name</Label>
          <Input
            theme={theme}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label theme={theme}>Email</Label>
          <Input
            theme={theme}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label theme={theme}>Subject</Label>
          <Input
            theme={theme}
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label theme={theme}>Message</Label>
          <TextArea
            theme={theme}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <SubmitButton
          theme={theme}
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </SubmitButton>
      </FormContainer>
    </ContactContainer>
  );
};

export default ContactPage; 