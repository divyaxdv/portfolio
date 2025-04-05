import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const NavContainer = styled.nav`
  position: fixed;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(11, 11, 43, 0.8);
  backdrop-filter: blur(10px);
  padding: 15px 30px;
  border-radius: 50px;
  border: 1px solid rgba(100, 255, 218, 0.2);
  z-index: 1000;
`;

const NavList = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
`;

const NavItem = styled(motion.li)`
  position: relative;
`;

const NavLink = styled(Link)`
  color: ${props => props.$isActive ? '#64FFDA' : '#FFFFFF'};
  text-decoration: none;
  font-size: 1.1rem;
  padding: 5px 10px;
  transition: color 0.3s ease;

  &:hover {
    color: #64FFDA;
  }
`;

const Orbit = styled(motion.div)`
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #64FFDA;
  transform-origin: left center;
`;

const Navigation = () => {
  const location = useLocation();

  return (
    <NavContainer>
      <NavList>
        {[
          { path: '/', label: 'Home' },
          { path: '/projects', label: 'Projects' },
          { path: '/about', label: 'About' },
          { path: '/contact', label: 'Contact' }
        ].map(({ path, label }) => (
          <NavItem key={path}>
            <NavLink to={path} $isActive={location.pathname === path}>
              {label}
            </NavLink>
            {location.pathname === path && (
              <Orbit
                layoutId="orbit"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </NavItem>
        ))}
      </NavList>
    </NavContainer>
  );
};

export default Navigation;