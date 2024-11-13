// src/components/Strengths.js
import React from "react";
import { Typography, Box, List, ListItem } from "@mui/material";

const Strengths = () => (
  <Box sx={{ marginBottom: "20px" }}>
    <Typography variant="h5" component="h2" gutterBottom>
      Strengths
    </Typography>
    <List>
      <ListItem>Problem Solving</ListItem>
      <ListItem>Leadership</ListItem>
      <ListItem>Decision Making</ListItem>
      <ListItem>Ambitious</ListItem>
    </List>
  </Box>
);

export default Strengths;
