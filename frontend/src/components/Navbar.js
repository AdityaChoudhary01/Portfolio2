import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Bar = styled(motion.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.88);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem; /* Ensure enough padding on both sides */
  z-index: 10;
  box-shadow: 0 2px 24px #dec3ff19;
  backdrop-filter: blur(6px);
  overflow: visible;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Link = styled.a`
  color: #6c38e0;
  font-weight: bold;
  text-decoration: none;
  font-size: 1.15rem;
  transition: color 0.15s;

  &:hover {
    color: #ff85a2;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  align-items: center;
  padding-right: 2rem; /* Increase padding to prevent overflow */

  a {
    color: #6c38e0;
    font-size: 1.5rem; /* Ensure consistent size */
    transition: color 0.15s;

    &:hover {
      color: #ff85a2;
    }
  }
`;

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Tech Stack", href: "#techstack" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <Bar
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <LinksContainer>
        {navLinks.map((l) => (
          <Link href={l.href} key={l.name}>
            {l.name}
          </Link>
        ))}
      </LinksContainer>
      <SocialIcons>
        <a href="https://www.instagram.com/aditya_choudhary__021/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://github.com/AdityaChoudhary01?" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/aditya-kumar-38093a304/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </SocialIcons>
    </Bar>
  );
}
