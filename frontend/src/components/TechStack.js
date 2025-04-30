import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from "react-icons/fa";

const StackWrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2.5rem auto 2rem auto;
  max-width: 900px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two columns */
  gap: 1.7rem;
  margin-top: 1.4rem;
`;

const Card = styled(motion.div)`
  background: linear-gradient(120deg, #85ffbd 0%, #fffb7d 100%);
  border-radius: 1.3rem;
  box-shadow: 0 2px 14px #abf6db42;
  padding: 1.3rem 1rem 0.7rem 1rem;
  display: flex; flex-direction: column; align-items: center;
  font-weight: bold; font-size: 1.07rem;
`;

const techies = [
  { icon: <FaReact color="#61dafb" size={48} />, name: "React" }, // Increased size
  { icon: <FaNodeJs color="#74ba65" size={48} />, name: "NodeJS" }, // Increased size
  { icon: <FaDatabase color="#593196" size={46} />, name: "MongoDB" }, // Increased size
  { icon: <FaJs color="#ffe357" size={46} />, name: "JavaScript" }, // Increased size
  { icon: <FaHtml5 color="#FF5722" size={46} />, name: "HTML5" }, // Increased size
  { icon: <FaCss3Alt color="#34b6e8" size={46} />, name: "CSS3" }, // Increased size
  { icon: <FaGitAlt color="#de4c36" size={46} />, name: "Git" }, // Increased size
  { icon: <FaDatabase color="#00758F" size={46} />, name: "SQL" }, // Increased size
  { icon: <FaJs color="#007396" size={46} />, name: "Java" }, // Increased size
  { icon: <FaJs color="#3776AB" size={46} />, name: "Python" }, // Increased size
  { icon: <FaJs color="#A8B9CC" size={46} />, name: "C" }, // Increased size
];

export default function TechStack() {
  return (
    <StackWrap id="techstack">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          textAlign: "center",
          fontFamily: "cursive",
          fontSize: "2rem",
          background: "linear-gradient(90deg,#ff85a2,#59e3ad,#ffc785,#845ef7)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >Tech Stack</motion.h2>
      <Grid>
        {techies.map((tech, idx) => (
          <Card
            key={tech.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.09 }}
            whileHover={{ scale: 1.09, rotate: [0, -3, 3, -3, 0], boxShadow:"0 4px 32px #abf6db54" }}
          >
            {tech.icon}
            <div style={{
              marginTop:"0.5rem",
              background: "linear-gradient(90deg,#ffc785 40%,#8fd6e7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>{tech.name}</div>
          </Card>
        ))}
      </Grid>
    </StackWrap>
  );
}
