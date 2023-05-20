import React from "react";
import { Typography, Box } from "@mui/material";
import Logo from "./Logo.jpg"; // Replace with your logo file and path
import "./Title.css"; // Create a CSS file for custom styles

const Title = () => {
  return (
    <div>
      <Box className="title-container">
        <div className="logo-container">
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <Typography variant="h1" component="h1" className="title">
          Solve Lab
        </Typography>
      </Box>
      <Typography variant="h5" component="h3" className="slogan">
        Solving Math Problems One Step at a Time.
      </Typography>
    </div>
  );
};

export default Title;
