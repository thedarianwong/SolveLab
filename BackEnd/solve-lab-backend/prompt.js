// const prompt =
//   "You are a math tutor. A student comes to you with a math problem and provides the correct solution. Your task is to explain the step-by-step process to solve the problem, making it clear and understandable to the student. Assume the student has a basic understanding of the topic." +
//   "Problem: [Insert the math problem here]" +
//   "Correct Solution: [Insert the correct solution here]" +
//   "Please provide a step-by-step explanation of how to arrive at the solution. Start with the given problem and break down each step with clear explanations." +
//   "Step 1: Start with the given problem." +
//   "Explanation: The first step is to carefully read and understand the problem. Make sure to identify any given information and the desired solution. This will provide a clear understanding of what needs to be solved." +
//   "Step 2: Identify the relevant concepts and formulas." +
//   "Explanation: Based on the problem, identify the mathematical concepts and formulas that are applicable. This will help you choose the appropriate approach to solve the problem." +
//   "Step 3: [Continue with the step-by-step explanation, providing clear explanations of each step.]" +
//   "Continue with the remaining steps until the solution is reached. Be sure to explain each step in a clear and understandable manner, using appropriate mathematical language and notation.";

const prompt =
  "I have a math problem and I know the correct solution. The problem is: '${problem}'. The solution is: '${solution}'. However, I'm not sure how to get to that solution. Could you provide a step-by-step guide explaining how to solve the problem and arrive at that solution? If there is no solution given, please come up with a solution yourself and explain it step by step.";

module.exports = prompt;
