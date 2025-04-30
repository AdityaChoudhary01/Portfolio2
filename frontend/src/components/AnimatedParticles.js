import React from "react";
import styled, { keyframes } from "styled-components";

const float = keyframes`
  100% { 
    transform: translateY(-100vh) scale(1.3); 
    opacity: 0.5;
  }
`;

const Particle = styled.div`
  position: absolute;
  left: ${({ left }) => left}vw;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background: ${({ color }) => color};
  opacity: 0.6;
  border-radius: 50%;
  top: 100vh;
  animation: ${float} ${({ duration }) => duration}s linear infinite;
  animation-delay: ${({ delay }) => delay}s;
`;

const colors = [
  "#ff85a2", "#6ee7b7", "#fef08a", "#c4b5fd", "#43e7fe", "#c5ec36"
];

const particles = Array.from({ length: 20 }, (_, i) => ({
  left: Math.random() * 100,
  size: 30 + Math.random() * 50,
  color: colors[Math.floor(Math.random() * colors.length)],
  duration: 7 + Math.random() * 7,
  delay: Math.random() * 5,
}));

function AnimatedParticles() {
  return (
    <>
      {particles.map((p, i) => (
        <Particle key={i} {...p} />
      ))}
    </>
  );
}

export default AnimatedParticles;
