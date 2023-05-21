const promptTemplate = require("./prompt");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const app = express();
app.use(cors());
app.use(express.json()); // to parse JSON request bodies

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
  try {
    const response = await axios.get("http://api.wolframalpha.com/v2/query", {
      params: {
        input: problem,
        output: "JSON",
        appid: process.env.WOLFRAM_APP_ID,
      },
    });

    const pods = response.data.queryresult?.pods;
    if (!pods || pods.length < 2) {
      throw new Error("Invalid response data");
    }

    const solutionPod = pods[1];

    if (
      !solutionPod ||
      !solutionPod.subpods ||
      solutionPod.subpods.length === 0
    ) {
      throw new Error("No solution found");
    }

    const solution = solutionPod.subpods[0].plaintext;

    return solution;
  } catch (err) {
    console.error(err.response ? err.response.data : err);
    throw err; // re-throw the error to propagate it to the calling function
  }
}

async function getStepsFromOpenAI(problem, solution) {
  const prompt = promptTemplate
    .replace("${problem}", problem)
    .replace("${solution}", solution);

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      max_tokens: 2000,
      temperature: 0, // Adjust the temperature as needed for desired output randomness
    });
    const steps = response.data.choices[0].text.trim();
    return steps;
  } catch (err) {
    console.error(err.response ? err.response.data : err); // Log the error
  }
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
