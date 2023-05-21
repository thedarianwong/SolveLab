import React, { useEffect } from "react";
import { TextField, Button } from "@mui/material";
import "./Styling/Input.css"; // Create a CSS file for custom styles
import katex from "katex";
import "katex/dist/katex.min.css";

const renderMath = (elementId, expression) => {
  katex.render(expression, document.getElementById(elementId));
};

const Input = ({ problem, setProblem, handleSubmit }) => {
  useEffect(() => {
    renderMath("math-input", problem);
  }, [problem]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="text-field-container">
        <TextField
          variant="outlined"
          label="Let's Solve a Math Problem!"
          fullWidth
          multiline
          rows={20}
          margin="normal"
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          inputProps={{ id: "math-input" }}
          className="text-field"
        />
      </div>
      <div className="button-container">
        <Button
          variant="contained"
          color="success"
          type="submit"
          className="solve-button"
        >
          Solve
        </Button>
      </div>
    </form>
  );
};

export default Input;
