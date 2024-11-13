// src/App.js
import React from "react";
import { Container, Box } from "@mui/material";
import Header from "./components/Header";
import Objective from "./components/Objective";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Strengths from "./components/Strengths";
import ResumeDownload from "./components/ResumeDownload";

const App = () => (
  <Container maxWidth="md" sx={{ fontFamily: "Roboto, sans-serif", padding: "20px" }}>
    <Box sx={{ textAlign: "center", mb: 4 }}>
      <Header />
    </Box>
    <Objective />
    <Education />
    <Skills />
    <Projects />
    <Certifications />
    <Strengths />
    <ResumeDownload />
  </Container>
);

export default App;
