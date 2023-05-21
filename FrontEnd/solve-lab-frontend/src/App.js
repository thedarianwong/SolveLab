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

    try {
      const response = await axios.post(
        "https://solve-lab-backend.onrender.com/solve",
        {
          problem,
        }
      );
      setSolution(response.data.solution);
      setSteps(response.data.steps);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  const adjustPageHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    // Adjust the height of the home page
    const homePage = document.querySelector(".home-page");
    if (homePage) {
      homePage.style.minHeight = `${vh}px`;
    }
  };

  // Call the adjustPageHeight function initially and on window resize
  window.addEventListener("resize", adjustPageHeight);
  adjustPageHeight();

  return (
    <div className="wrapper">
      <div className="home-page">
        <Title />
        <Input
          problem={problem}
          setProblem={setProblem}
          handleSubmit={handleSubmit}
        />
      </div>
      {loading && (
        <div className="loading-container">
          <CircularProgress />
        </div>
      )}
      {(solution || steps) && (
        <div className="answer-page" ref={outputRef}>
          <Output solution={solution} steps={steps} />
        </div>
      )}
    </div>
  );
}

export default App;
