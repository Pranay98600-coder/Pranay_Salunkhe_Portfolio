import styled from 'styled-components';
import { FaArrowUp, FaGithub, FaLinkedin } from 'react-icons/fa6';

const FooterContainer = styled.footer`
  background: ${(props) => props.theme.surface};
  padding: 2rem max(2rem, calc((100vw - 1180px) / 2));
  border-top: 1px solid ${(props) => props.theme.line};
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: end;
  flex-wrap: wrap;
`;

const FooterIdentity = styled.div`
  display: grid;
  gap: 0.35rem;
  color: ${(props) => props.theme.text};
  font-size: 0.9rem;
  span { color: ${(props) => props.theme.muted}; font: 0.7rem ${(props) => props.theme.mono}; }
`;

const SocialLink = styled.a`
  color: ${(props) => props.theme.accent};
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font: 0.75rem ${(props) => props.theme.mono};
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.text};
  }

`;
const Copyright = styled.small`
  display: block;
  margin-top: 1.5rem;
  color: ${(props) => props.theme.muted};
  font: 0.7rem ${(props) => props.theme.mono};
`;
function Footer() {
  return (
    <FooterContainer>
      <SocialLinks>
        <FooterIdentity><strong>Pranay Salunkhe</strong><span>Java | Spring Boot | Full-Stack Developer</span></FooterIdentity>
        <SocialLink href="/#home" aria-label="Back to top">Back to top <FaArrowUp aria-hidden="true" /></SocialLink>
        <SocialLink href="https://github.com/Pranay98600-coder" target="_blank" rel="noopener noreferrer"><FaGithub aria-hidden="true" /> GitHub</SocialLink>
        <SocialLink href="https://www.linkedin.com/in/pranay-salunkhe-968650255/" target="_blank" rel="noopener noreferrer"><FaLinkedin aria-hidden="true" /> LinkedIn</SocialLink>
      </SocialLinks>
      <Copyright>© 2026 Pranay Salunkhe</Copyright>
    </FooterContainer>
  );
}

export default Footer;
