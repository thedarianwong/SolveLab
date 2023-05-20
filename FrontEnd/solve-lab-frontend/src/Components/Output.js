import React from "react";
import { Box, Typography } from "@mui/material";
import "./Styling/Output.css";

const Output = ({ solution, steps }) => {
  return (
    <Box component="div" className="output-container">
      <Box component="div" className="output-box solution-box">
        <Typography variant="body1" gutterBottom>
          <strong>Solution:</strong>
        </Typography>
        <Typography variant="body1">{solution}</Typography>
      </Box>
      <Box component="div" className="output-box steps-box">
        <Typography variant="body1" gutterBottom>
          <strong>Steps:</strong>
        </Typography>
        <Typography variant="body1">{steps}</Typography>
      </Box>
    </Box>
  );
};

export default Output;
