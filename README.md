# SolveLab

SolveLab is a simple web application designed to solve mathematical problems and present the solutions in a step-by-step manner. This project is built using React along with MUI on the Frontend, Express.js and Node.js on the Backend, with the help of the Wolfram Alpha API for computation and OpenAI GPT API for steps required to reach such solutions. If the problem does not have a computational solution, then it will try to prove the problem.

## Features

- Input math problems
- Receive computational solutions
- Receive step-by-step solutions
- Automated scrolling to solution view (Full screen view of solutions)

## Installation

To get started with SolveLab, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/thedarianwong/solvelab.git
    ```

2. Change into the directory:

    ```bash
    cd FrontEnd/solve-lab-frontend
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Start the application:

    ```bash
    npm start
    ```

## Usage

Using SolveLab is easy:

1. Enter a mathematical problem into the input field.
2. Click on the "Solve" button.
3. Wait for the solution to load.
4. The page will automatically scroll to the solution section, showing the answer and the step-by-step solution.

## Technologies Used

- Frontend: [React.js](https://reactjs.org/), [Material-UI](https://mui.com/)
- Backend: [Node.js](https://nodejs.org/en/), [Express.js](https://expressjs.com/)
- API: [Wolfram Alpha API](https://products.wolframalpha.com/api/), [OpenAI GPT API](https://platform.openai.com/docs/api-reference/introduction)
- Other: [axios](https://axios-http.com/)

## Future Improvements

Some future improvements planned for SolveLab:

- Support for more complex mathematical problems.
- Improve error handling and user feedback.
- Improve loading spinner's look and feel.
- Support conversion for any maths problems to satisfy the requirements of Wolfram input. (Wolfram do not understand some questions format)
- Implement a math keyboard input for mathematical notations.

## Inspirations

- I am a Mathematics and Computing Science student, so I thought having a tool like this would give me some references when I am solving math homeworks.
- I wanted to build a simple web application that is straightforward, easy-to-use and helpful to math students.
- Articles has proven that GPT is not proficient in maths and often make lots of errors, however, I think the explanation given by GPT is human readable and understandable. So, I implement Wolfram whereas their computational is exceptional, so given the correct solutions, we put it into GPT to generate a step by step walkthrough. This will minimize the error in calculations.

## Contributions

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/username/solvelab/issues). 
There's no issues posted yet.

## License

This project is made for StormHacks 2023 (Hackathon).
