// src/components/Header.js
import React from "react";
import { Typography, Link } from "@mui/material";

const Header = () => (
  <header>
    <Typography variant="h3" component="h1" gutterBottom>
      Sherwin Gonsalves
    </Typography>
    <Typography variant="body1">Phone: +91 9769155949</Typography>
    <Typography variant="body1">Email: <Link href="mailto:sherwingonsalvesalt@gmail.com">sherwingonsalvesalt@gmail.com</Link></Typography>
    <Typography variant="body1">
      LinkedIn: <Link href="https://www.linkedin.com/in/sherwin-gonsalves-6b0296311/" target="_blank" rel="noopener noreferrer">
        Sherwin Gonsalves
      </Link>
    </Typography>
  </header>
);

export default Header;
