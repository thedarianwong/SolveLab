import React from "react";
import { Typography, Box } from "@mui/material";
import Logo from "./Images/Logo.jpg"; // Replace with your logo file and path
import "./Styling/Title.css"; // Create a CSS file for custom styles
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  typography: {
    fontFamily: "'Fjalla One', sans-serif;", // Specify the desired font family here
  },
});
const Title = () => {
  return (
    <div>
      <Box className="title-container">
        <div className="logo-container">
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <ThemeProvider theme={theme}>
          <Typography variant="h1" component="h1" className="title">
            Sol^e Lab
          </Typography>
        </ThemeProvider>
        <Typography variant="h5" component="h3" className="slogan">
          Solving Math Problems One Step at a Time.
        </Typography>
      </Box>
    </div>
  );
};

export default Title;
