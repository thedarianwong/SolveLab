// import React, { useState } from "react";
import Title from "./Components/Title";

function App() {
  // const [problem, setProblem] = useState("");
  // const [solution, setSolution] = useState(""); // Add a new state variable for the solution

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   // Here, you will call the server-side logic to solve the problem.
  //   // We'll implement this later.
  // };

  return (
    <div>
      <Title />
      {/* <Input
        problem={problem}
        setProblem={setProblem}
        handleSubmit={handleSubmit}
      />
      <Output solution={solution} /> */}
    </div>
  );
}

export default App;
