import { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaXmark } from 'react-icons/fa6';

const Nav = styled.nav`
  background: rgba(16, 19, 18, 0.88);
  backdrop-filter: blur(14px);
  padding: 1.1rem max(2rem, calc((100vw - 1180px) / 2));
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid ${(props) => props.theme.line};
`;
const Inner = styled.div`display: flex; justify-content: space-between; align-items: center; max-width: 1180px; margin: 0 auto; width: 100%;`;
const Brand = styled.a`color: ${(props) => props.theme.text}; font: 600 0.9rem ${(props) => props.theme.mono}; text-decoration: none; span { color: ${(props) => props.theme.accent}; }`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;

  @media (max-width: 768px) {
    display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 68px;
    left: 0;
    width: 100%;
    background: ${(props) => props.theme.surface};
    padding: 1rem;
  }
`;

const NavLink = styled.a`
  color: ${(props) => props.theme.accent};
  text-decoration: none;
  font: 0.78rem ${(props) => props.theme.mono};
  text-transform: uppercase;
  letter-spacing: 0.08em;

  &:hover {
    color: ${(props) => props.theme.text};
  }
`;

const Hamburger = styled.button`
  display: none;
  color: ${(props) => props.theme.accent};
  font-size: 1.5rem;
  cursor: pointer;
  background: transparent;
  border: 0;

  @media (max-width: 768px) {
    display: block;
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Nav aria-label="Main navigation"><Inner>
      <Brand href="/#home" onClick={() => setIsOpen(false)}>PS<span>.</span></Brand>
      <Hamburger onClick={toggleMenu} aria-label={isOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={isOpen}>
        {isOpen ? <FaXmark /> : <FaBars />}
      </Hamburger>
      <NavLinks $isOpen={isOpen}>
        {['home', 'about', 'focus', 'skills', 'experience', 'projects', 'education', 'certifications', 'contact'].map((item) => <li key={item}><NavLink href={`/#${item}`} onClick={toggleMenu}>{item === 'focus' ? 'what I build' : item}</NavLink></li>)}
      </NavLinks>
    </Inner></Nav>
  );
}

export default Navbar;
