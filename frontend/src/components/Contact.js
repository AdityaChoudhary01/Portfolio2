import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import axios from "axios";

const FormWrap = styled(motion.form)`
  display: flex; flex-direction: column; align-items: center; width: 100%;
  gap: 1rem; margin-bottom: 3rem;
`;

const Field = styled.input`
  padding: 1rem; border-radius: 1.5rem; border:none;
  background: #fff;
  box-shadow: 0 1px 8px #d4d0ed42;
  width: 300px; font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 1rem; border-radius: 1.5rem; border:none;
  background: #fff;
  box-shadow: 0 1px 8px #d4d0ed42;
  width: 300px; font-size: 1rem; resize: none;
`;

const Btn = styled.button`
  background: linear-gradient(90deg, #5efce8 0%, #736efe 100%);
  border: none; color: #fff; padding: 0.75rem 2rem;
  font-size: 1.05rem; border-radius: 1.5rem; cursor:pointer;
  font-weight: bold; transition: filter 0.1s;
  &:hover { filter: brightness(1.1);}
`;

function Contact() {
  const [formData, setFormData] = useState({name:"", email:"", message:""});
  const [sent, setSent] = useState(false);

  const handleChange = e => setFormData(f => ({...f, [e.target.name]: e.target.value}));
  const handleSubmit = e => {
    e.preventDefault();
    axios.post("https://portfolio2-backend.onrender.com/api/contact", formData).then(() => setSent(true));
  };

  return (
    <section id="contact">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          textAlign: "center",
          fontFamily: "cursive",
          fontSize: "2rem",
          background: "linear-gradient(90deg,#00c9ff,#92fe9d)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >Contact Me</motion.h2>
      <FormWrap
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {sent ? (
          <motion.div
            initial={{ scale: 0, rotate: -15 }}
            animate={{ scale: 1, rotate: 0, color: "#88f684" }}
            transition={{ type: "spring", stiffness: 150 }}
            style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
            Thank you! 🎉
          </motion.div>
        ) : (
          <>
            <Field placeholder="Name" name="name" required onChange={handleChange} />
            <Field placeholder="Email" type="email" name="email" required onChange={handleChange} />
            <TextArea placeholder="Message" name="message" rows={4} required onChange={handleChange} />
            <Btn type="submit">Send 🚀</Btn>
          </>
        )}
      </FormWrap>
    </section>
  );
}
export default Contact;
