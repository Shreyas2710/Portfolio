// src/components/Skills.js
import React from "react";
import { Typography, Box, List, ListItem } from "@mui/material";

const Skills = () => (
  <Box sx={{ marginBottom: "20px" }}>
    <Typography variant="h5" component="h2" gutterBottom>
      Technical Skills
    </Typography>
    <List>
      <ListItem>Programming: C, Java, Python, SQL</ListItem>
      <ListItem>Web Development: HTML, CSS, JavaScript</ListItem>
      <ListItem>Machine Learning Basics</ListItem>
    </List>
  </Box>
);

export default Skills;
