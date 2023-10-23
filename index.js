//packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

//function to write README file
function writeToFile(response) {
  fs.writeFile(
    "README.md",
    generateMarkdown.generateMarkdown(response),
    (error) =>
      error ? console.error(error) : console.log("Successfully Created!")
  );
}

class Confirm {
  constructor(message, name) {
    this.message = message;
    this.name = name;
    ("input: confirm,");
  }
}

const imgConfirm = new Confirm(
  "Do you want to include a image or gif?",
  "includeImage"
);

const vidConfirm = new Confirm(
  "Do you want to add a video link to Usage?",
  "videoUrl"
);

//array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of the application",
    name: "title",
  },
  {
    type: "input",
    message: "What is the description?",
    name: "description",
  },
  {
    type: "input",
    message: "How does a user install your application?",
    name: "install",
  },
  {
    type: "input",
    message: "How does a user use your application?",
    name: "usage",
  },
  {
    type: "input",
    message: "What are the contribution guidelines for your application?",
    name: "contribution",
  },
  {
    type: "input",
    message: "What are the test instructions for your application?",
    name: "tests",
  },
  {
    type: "list",
    message: "Select the License for your application:",
    name: "license",
    choices: [
      "None",
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
    ],
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub Username",
  },
  {
    type: "email",
    name: "email",
    message: "Enter your email adress:",
  },
  imgConfirm,
  {
    type: "input",
    name: "img",
    when: (answers) => answers.includeImage,
    message: "Enter the file path to your img/gif",
  },
  {
    type: "input",
    name: "altText",
    when: (answers) => answers.includeImage,
    message: "Enter the alt text for your img/gif",
  },
  vidConfirm,
];

//Function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((response) => {
      writeToFile(response);
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.error(`Prompt couldn't be rendered in the current environment`);
      } else {
        console.error(`Something else went wrong: ${error}`);
      }
    });
}

// Function call to initialize app
init();
