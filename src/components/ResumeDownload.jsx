// src/components/ResumeDownload.js
import React from "react";
import { Button, Typography, Box } from "@mui/material";
import resumeFile from "../assets/Resume_Sherwin.pdf"; // Adjust path as needed

const ResumeDownload = () => (
  <Box sx={{ textAlign: "center", marginTop: "20px" }}>
    <Typography variant="h5" component="h2" gutterBottom>
      Download Resume
    </Typography>
    <Button
      variant="contained"
      color="primary"
      href={resumeFile}
      download="Resume_Sherwin.pdf"
    >
      Click here to download my resume
    </Button>
  </Box>
);

export default ResumeDownload;
