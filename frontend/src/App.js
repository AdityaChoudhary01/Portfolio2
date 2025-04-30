import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AnimatedParticles from "./components/AnimatedParticles";

const AppWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #8fd6e7, #e69fef 60%, #ffed87 100%);
  position: relative;
  overflow-x: hidden;
  font-family: "Poppins", Arial, sans-serif;
`;

function App() {
  return (
    <AppWrapper>
      <Navbar />
      <AnimatedParticles />
      <About />
      <TechStack />
      <Projects />
      <Contact />
    </AppWrapper>
  );
}

export default App;
