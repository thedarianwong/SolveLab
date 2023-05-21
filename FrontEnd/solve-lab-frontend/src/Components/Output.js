import React from "react";
import { Box, Typography } from "@mui/material";
import "./Styling/Output.css";

const Output = ({ solution, steps }) => {
  const formattedSteps = steps
    .split(/(Step \d+:)/g) // split based on "Step x:"
    .filter((sentence) => sentence.trim() !== "") // remove empty strings
    .map((sentence, index) => {
      if (sentence.startsWith("Step")) {
        // if the sentence is "Step x:", put it in a new line and bold
        return (
          <Typography variant="body1" key={index}>
            <strong>{sentence.trim()}</strong>
          </Typography>
        );
      } else {
        // if the sentence is not "Step x:", it's the description of the step
        return (
          <Typography variant="body1" key={index}>
            {sentence.trim()}.
          </Typography>
        );
      }
    });
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
        <Typography variant="body1">{formattedSteps}</Typography>
      </Box>
    </Box>
  );
};

export default Output;
