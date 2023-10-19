// [<https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide>]

// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

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
const questions = [
  "What is the title of the project",
  "What is the description?",
  "How does a user install your application?",
  "How does a user use your application?",
  "What are the contribution guidelines for your application?",
  "What are the test instructions for your application?",
];

// const answers = "";

const questionGetter = (question, object) => {
  for (const question of questions) {
    `input: ${question[0]}`;
    console.log(question[0]);
  }
};

// const buildOutRM = (answers) => {
//   fs.appendFile("./README.md", `# ${answers[0]}\n\n`),
//     error ? console.log(error) : console.log(`success`);
//   console.log(`I tried to build`);
// };

console.log(questions);

const [title, description, install, usage, contribute, test] = questions;

inquirer
  .prompt([
    {
      type: "input",
      message: title,
      name: "title",
    },
    {
      type: "input",
      message: description,
      name: "description",
    },
    {
      type: "input",
      message: install,
      name: "install",
    },
    {
      type: "input",
      message: usage,
      name: "usage",
    },
    {
      type: "input",
      message: contribute,
      name: "contribution",
    },
    {
      type: "input",
      message: test,
      name: "test-instructions",
    },
    {
      type: "list",
      message: "Test",
      name: "license",
      choices: [
        "AFL-3.0",
        "Apache-2.0",
        "Artistic-2.0",
        "BSL-1.0",
        "BSD-2-Clause",
        "BSD-3-Clause",
        "BSD-3-Clause-Clear",
        "BSD-4-Clause",
        "0BSD",
        "CC",
        "CC0-1.0",
        "CC-BY-4.0",
        "CC-BY-SA-4.0",
        "WTFPL",
        "ECL-2.0",
        "EPL-1.0",
        "EPL-2.0",
        "EUPL-1.1",
        "AGPL-3.0",
        "GPL",
        "GPL-2.0",
        "GPL-3.0",
        "LGPL",
        "LGPL-2.1",
        "LGPL-3.0",
        "ISC",
        "LPPL-1.3c",
        "MS-PL",
        "MIT",
        "MPL-2.0",
        "OSL-3.0",
        "PostgreSQL",
        "OFL-1.1",
        "NCSA",
        "Unlicense",
        "Zlib",
      ], ////Need License Types here!!!
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    writeToFile(answers);
    generateMarkdown(answers);
    console.log(title);
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
function writeToFile(answers) {
  fs.writeFile(
    "README.md",
    `# ${answers.title}\n\n## Description\n\n${answers.description}\n\n## Table of Contents\n\n## Installation\n\n${answers.install}\n\n## Usage\n\n${answers.usage}\n\n## Contributing\n\n## Tests\n\n## Questions\n\n${questions}\n`,
    (error) =>
      error ? console.error(error) : console.log("Successfully Created!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt;
}

// Function call to initialize app
init();
