// src/components/Projects.js
import React from "react";
import { Typography, Box, List, ListItem } from "@mui/material";

const Projects = () => (
  <Box sx={{ marginBottom: "20px" }}>
    <Typography variant="h5" component="h2" gutterBottom>
      Projects
    </Typography>
    <List>
      <ListItem><strong>Image Encryption and Decryption</strong>: Using chaos mapping and DNA encoding for secure image handling.</ListItem>
      <ListItem><strong>Smart BP Monitor</strong>: IoT-enabled BP monitor based on the oscillometric method.</ListItem>
    </List>
  </Box>
);

export default Projects;
