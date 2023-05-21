import React from "react";
import { TextField, Button } from "@mui/material";
import "./Styling/Input.css";

const Input = ({ problem, setProblem, handleSubmit }) => {
  return (
    <form className="wrap-container" onSubmit={handleSubmit}>
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
          className="text-field"
        />
        {/* Display MathJax content
        <MathJax.Provider>
          <div id="math-input">
            <MathJax.Node formula={problem} />
          </div>
        </MathJax.Provider> */}
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
