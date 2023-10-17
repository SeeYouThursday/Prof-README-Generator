// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
  "What is the title of the project",
  "What is the description?",
  "How does a user install your application?",
  "How does a user use your application?",
  "What are the contribution guidelines for your application?",
  "What are the test instructions for your application?",
];

// const questions = [
//   ["input", "What is the title of the project", "title"],
//   ["input", "What is the description?", "description"],
//   ["input", "How does a user install your application?", "install"],
//   ["input", "How does a user use your application?", "usage"],
//   [
//     "input",
//     "What are the contribution guidelines for your application?",
//     "contribution",
//   ],
//   [
//     "input",
//     "What are the test instructions for your application?",
//     "instructions",
//   ],
// ];

const questionGetter = (questions) => {
  for (const question of questions) {
    `input: ${question[0]}`;
    console.log(question[0]);
  }
};

// console.log(...questions[0]);

inquirer
  .prompt([
    {
      type: "input",
      message: questions[0],
      name: "title",
    },
    {
      type: "input",
      message: questions[1],
      name: "description",
    },
    {
      type: "input",
      message: questions[2],
      name: "install",
    },
    {
      type: "input",
      message: questions[3],
      name: "usage",
    },
    {
      type: "input",
      message: questions[4],
      name: "contribution",
    },
    {
      type: "input",
      message: questions[5],
      name: "test-instructions",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const stringifyAnswers = JSON.stringify(answers);
    fs.appendFile(
      "./README.md",
      `${stringifyAnswers}\n`,
      //// Currently appends the object stringified (obviously)
      (error) => {
        error ? console.error(error) : console.log("Successfully Logged!");
      }
    );
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
// TODO: Create an array of questions for user input

// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
  fs.writeFile("README.md", "utf8", (error) =>
    error ? console.error(error) : console.log("Successfully Created!")
  );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
