import React from "react";
import { Box } from "@mui/material";
import "./Styling/Output.css"; // Create a CSS file for custom styles

const Output = ({ result }) => {
  return (
    <Box className="output-container">
      <h2>Output:</h2>
      <div className="result">{result}</div>
    </Box>
  );
};

export default Output;
