const { error } = require("console");
const fs = require("fs");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  license
    ? `![Static Badge](https://img.shields.io/badge/${license}-content)`
    : "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  license ? `(## License)` : console.error(error);
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.license) {
    `## License
    
    `;
    // If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
  } else return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("done", data.title);
  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)}

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  [Installation](#Installation)
  [Usage](#Usage)
  [Contributing](#Contributing)
  [Tests](#Tests)
  ## Installation
  
  ${data.install}
  
  ## Usage
  
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  ## Contributing\n\n## Tests
  
  `;
}

module.exports = {
  generateMarkdown,
  renderLicenseLink,
  renderLicenseSection,
  renderLicenseBadge,
};
