import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const float = keyframes`
  0%,100% { transform: translateY(0px);}
  50% { transform: translateY(-24px);}
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5rem auto 2rem auto;
  max-width: 950px;
  gap: 3rem;
  min-height: 300px;
  padding: 6rem 1rem; /* Increased top padding to account for navbar height */
  @media (max-width: 750px) {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
    padding: 8rem 1rem; /* Add more padding for smaller screens */
  }
`;

const BlobbyAvatar = styled(motion.div)`
  min-width: 200px; /* Adjusted size */
  min-height: 200px; /* Adjusted size */
  width: 220px; /* Increased size */
  height: 220px; /* Increased size */
  border-radius: 38% 62% 63% 37% / 48% 42% 58% 52%;
  background: linear-gradient(135deg, #a18cd1, #fbc2eb 60%, #f9d923 100%);
  box-shadow: 0 1px 32px #d4d0ed53;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${float} 4s ease-in-out infinite;

  img {
    width: 160px; /* Increased size */
    height: 160px; /* Increased size */
    border-radius: 100%;
    object-fit: cover;
  }
`;

const TextWrap = styled.div`
  max-width: 540px;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const StyledName = styled.span`
  font-size: 2.2rem;
  font-weight: bold;
  background: linear-gradient(90deg, #ff85a2, #59e3ad, #ffc785, #845ef7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;


export default function About() {
  return (
    <Section id="about">
      <BlobbyAvatar
        initial={{ scale: 0.7, rotate: -15, opacity: 0 }}
        whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <img
          src="/avatar.jpg"
          alt="Your Avatar"
        />
      </BlobbyAvatar>
      <TextWrap>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Hey there! I&#39;m <StyledName>Aditya Choudhary</StyledName>,<b> Mern-Stack Web Developer | DSA Enthusiast | Problem Solver </b> I'm a passionate Full-Stack Web Developer with a strong foundation in JavaScript, Data Structures and Algorithms (DSA) with Java, MERN Stack, and C++. I specialize in creating interactive, scalable, and high-performance web applications, focusing on clean UI, responsive design, and delivering seamless user experiences. With a problem-solving mindset and a dedication to continuous learning, I strive to build solutions that make an impact..<br/>
          I love creating <span style={{color:'#ff85a2', fontWeight:600}}>colorful</span>, <span style={{color:'#59e3ad', fontWeight:600}}>playful</span> user experiences and writing clean backend code.<br/><br/>
          My expertise includes React, Node/Express, MongoDB, and creative UI/UX design!
        </motion.p>
        <motion.a
          href="/resume.pdf"
          download
          whileHover={{ scale: 1.08, backgroundColor: "#59e3ad" }}
          transition={{ type: "spring", stiffness: 300 }}
          style={{
            display: "inline-block",
            marginTop: "1rem",
            padding: "0.65rem 2rem",
            background: "linear-gradient(90deg,#845ef7,#ff85a2)",
            color: "#fff",
            borderRadius: "2rem",
            fontWeight: 600,
            textDecoration: "none",
            boxShadow: "0 1px 14px #e68fee20"
          }}
        >
          Download Resume
        </motion.a>
      </TextWrap>
    </Section>
  );
}
