import React, { useState, useRef, useEffect } from "react";
import Title from "./Components/Title";
import Input from "./Components/Input";
import Output from "./Components/Output";
import { CircularProgress } from "@mui/material";
import "./App.css";
import axios from "axios";

function App() {
  const [problem, setProblem] = useState("");
  const [solution, setSolution] = useState("");
  const [steps, setSteps] = useState("");
  const [loading, setLoading] = useState(false);

  const outputRef = useRef(null);

  useEffect(() => {
    if (solution || steps) {
      outputRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [solution, steps]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    // Here, you will call the server-side logic to solve the problem.
    // We'll implement this later.
    try {
      const response = await axios.post("http://localhost:5000/solve", {
        problem,
      });
      setSolution(response.data.solution);
      setSteps(response.data.steps);
    } catch (error) {
      console.error(error);
      // handle the error...
    }

    setLoading(false);
  };

  return (
    <div>
      <div className="home-page">
        <Title />
        <Input
          problem={problem}
          setProblem={setProblem}
          handleSubmit={handleSubmit}
        />
      </div>
      <div className="answer-page">
        {loading ? (
          <div className="loading-container">
            <CircularProgress />
          </div>
        ) : (
          <div ref={outputRef}>
            <Output solution={solution} steps={steps} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
