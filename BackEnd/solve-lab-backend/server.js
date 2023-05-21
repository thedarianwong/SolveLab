require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json()); // to parse JSON request bodies

app.get("/", (req, res) => {
  res.send("Math Solver Server is Running!");
});

app.post("/solve", async (req, res) => {
  const problem = req.body.problem;

  try {
    const solution = await getSolutionFromWolfram(problem);
    const steps = await getStepsFromOpenAI(problem, solution);

    res.json({ solution, steps });
  } catch (err) {
    res.status(500).json({ error: "This is too Difficult but I will Try!" });
    console.error(err);
  }
});

async function getSolutionFromWolfram(problem) {
  const response = await axios.get("http://api.wolframalpha.com/v2/query", {
    params: {
      input: problem,
      output: "JSON",
      appid: process.env.WOLFRAM_APP_ID,
    },
  });

  // Parse response to get solution...

  return solution;
}

async function getStepsFromOpenAI(problem, solution) {
  const response = await axios.post(
    "https://api.openai.com/v1/engines/davinci-codex/completions",
    {
      prompt: `Problem: ${problem}\nSolution: ${solution}\nExplain the steps to solve this problem.`,
      max_tokens: 200,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
    }
  );

  // Parse response to get steps...

  return steps;
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
