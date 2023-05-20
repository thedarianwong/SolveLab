import React, { useState } from "react";
import Title from "./Components/Title";
import Input from "./Components/Input";
import Output from "./Components/Output";
import "./App.css";

function App() {
  const [problem, setProblem] = useState("");
  const [solution, setSolution] = useState("");
  const [steps, setSteps] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Here, you will call the server-side logic to solve the problem.
    // We'll implement this later.
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
      <Output solution={solution} steps={steps} />
    </div>
  );
}

export default App;
