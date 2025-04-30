import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin: 3rem 0;
`;

const Card = styled(motion.div)`
  background: linear-gradient(120deg, #85ffbd 0%, #fffb7d 100%);
  padding: 2rem;
  border-radius: 2rem;
  width: 340px;
  box-shadow: 0 6px 40px rgba(60,120,160,0.15);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
  transition: transform 0.15s;
  &:hover { transform: scale(1.05); }
`;

function Projects() {
  const [projects, setProjects] = useState([
    {
      _id: "1",
      title: "YumRide",
      description: "YumRide is an innovative food delivery platform that connects users with their favorite local restaurants and delivers delicious meals right to their doorstep. Whether you crave comfort food, gourmet dishes, or healthy options, YumRide brings a diverse culinary experience to your fingertips.",
      techStack: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
      demo: "https://food-delivery-frontend-mo9e.onrender.com/",
      image: "/images/yumride.png", // Add image path
    },
    {
      _id: "2",
      title: "QR Generator",
      description: "A QR code generator that allows users to create custom QR codes for various purposes. Users can input text, URLs, or contact information to generate QR codes that can be downloaded or shared. The app provides a simple and intuitive interface for creating and managing QR codes.",
      techStack: ["JavaScript", "REST API", "QRCode", "HTML", "CSS"],
      demo: "https://adityachoudhary01.github.io/QrCodeGenerator/",
      image: "/images/qr-generator.png", // Add image path
    },
    {
      _id: "3",
      title: "Weather App",
      description: "A dynamic weather application that enables users to check current weather conditions based on city or location input. It fetches real-time weather data, including temperature, humidity, and wind speed, using a REST API and displays the information in an intuitive UI.",
      techStack: ["JavaScript", "HTML", "CSS", "REST API"],
      demo: "https://adityachoudhary01.github.io/WeatherApp/",
      image: "/images/weather-app.png", // Add image path
    },
    {
      _id: "4",
      title: "aktuwrld",
      description: "A study platform for students of AKTU (Dr. A.P.J. Abdul Kalam Technical University) that provides resources, notes, and previous year question papers for various courses and subjects. Students can access study materials, syllabus, and exam-related information to enhance their learning experience and academic performance.",
      techStack: ["JavaScript", "HTML", "CSS"],
      demo: "https://aktuwrld.netlify.app/",
      image: "/images/aktuwrld.png", // Add image path
    },
    {
      _id: "5",
      title: "Wifi QR Code Generator",
      description: "A wifi QR code generator that allows users to create QR codes for connecting to Wi-Fi networks. Users can input network SSID, password, and encryption type to generate a QR code that can be scanned by devices to automatically connect to the network. The app simplifies the process of sharing Wi-Fi credentials with guests or connecting to new networks.",
      techStack: ["JavaScript", "HTML", "CSS", "REST API"],
      demo: "https://adityachoudhary01.github.io/WifiQrCodeGenerator/",
      image: "/images/wifi-qr-code-generator.png", // Add image path
    },
    {
      _id: "6",
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects, skills, and contact information. Built with modern web technologies, it provides an interactive and visually appealing way to present professional achievements.",
      techStack: ["React", "Tailwind CSS", "JavaScript"],
      demo: "https://adityachoudharyportfolio.netlify.app/",
      image: "/images/portfolio-website.png", // Add image path
    },
    {
      _id: "7",
      title: "Expense Tracker",
      description: "An expense tracking application that helps users manage their finances by recording income and expenses. Users can categorize transactions, set budgets, and visualize spending patterns through charts and graphs.",
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      demo: "https://khatabook-qcb9.onrender.com/",
      image: "/images/expense-tracker.png", // Add image path
    },
    {
      _id: "8",
      title: "JAT Universal",
      description: "JAT Universal is a comprehensive platform offering a wide range of services, including e-commerce, logistics, and customer support. It aims to simplify business operations and enhance user experience through innovative solutions.",
      techStack: ["HTML", "CSS"],
      demo: "https://jatuniversal-history.netlify.app/",
      image: "/images/jat-universal.png", // Add image path
    },
    {
      _id: "9",
      title: "Chatty",
      description: "Chatty is a full-stack real-time chat application built with the MERN (MongoDB, Express.js, React.js, Node.js) stack. It features user authentication with JWT, real-time messaging with Socket.io, and modern UI styling using TailwindCSS and DaisyUI. The app supports online user status, global state management with Zustand, and provides a seamless communication experience with responsive design.",
      techStack: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "JWT", "Cloudinary", "Axios", "React Hot Toast"],
      demo: "https://chat-app-adityachoudhary.netlify.app/",
      image: "/images/chatty.png", // Add image path
    },
  ]);

  return (
    <div id="projects">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          textAlign: "center",
          fontFamily: "cursive",
          fontSize: "2rem",
          background:
            "linear-gradient(90deg,#ff85a2,#59e3ad,#ffc785,#845ef7)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        My Projects
      </motion.h2>
      <Grid>
        {projects.map((proj, idx) => (
          <Card
            key={proj._id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15 }}
            whileHover={{ scale: 1.06, rotate: -2 }}
          >
            <img
              src={proj.image}
              alt={proj.title}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "1rem",
                marginBottom: "1rem",
              }}
            />
            <h3
              style={{
                margin: 0,
                fontSize: "1.5rem",
                background:
                  "linear-gradient(94deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {proj.title}
            </h3>
            <p>{proj.description}</p>
            {proj.demo && (
              <a
                href={proj.demo}
                rel="noopener noreferrer"
                target="_blank"
                style={{
                  color: "#3600ff",
                  fontWeight: "bold",
                  marginTop: "auto",
                  textDecoration: "underline dotted",
                }}
              >
                Visit Live
              </a>
            )}
          </Card>
        ))}
      </Grid>
    </div>
  );
}
export default Projects;
