// src/components/Certifications.js
import React from "react";
import { Typography, Box, List, ListItem } from "@mui/material";

const Certifications = () => (
  <Box sx={{ marginBottom: "20px" }}>
    <Typography variant="h5" component="h2" gutterBottom>
      Certifications
    </Typography>
    <List>
      <ListItem>Unsupervised Learning, Recommenders, Reinforcement Learning (DeepLearning.AI, Stanford University, 2024)</ListItem>
      <ListItem>Advanced Learning Algorithms (DeepLearning.AI, Stanford University, 2024)</ListItem>
      <ListItem>Supervised Machine Learning: Regression and Classification (DeepLearning.AI, Stanford University, 2024)</ListItem>
    </List>
  </Box>
);

export default Certifications;
