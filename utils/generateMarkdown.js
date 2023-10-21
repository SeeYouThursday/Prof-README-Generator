const fs = require("fs");

////Render License Badge towards to the top
// If there is no license, return an empty string
const renderLicenseBadge = (license) =>
  license
    ? `![Static Badge](https://img.shields.io/badge/${license}-content)`
    : "";

////Render License Link
// If there is no license, return an empty string
const renderLicenseLink = (license) => (license ? `[License](#license)` : "");

////Render License Section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) =>
  license !== "none"
    ? `## License

    **This application is covered under the ${license} License**`
    : "";
// Above would be more helpful to include rather than an empty string.
// If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

//// Generate markdown for README
const generateMarkdown = (data) =>
  `# ${data.title}
  
${renderLicenseBadge(data.license)}

## Description
  
${data.description}
  
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- ${renderLicenseLink(data.license)}

## Installation
  
${data.install}
  
## Usage
  
${data.usage}
  
## Contributing
  
//add link to contribute

## Tests

//add link to tests

//Renders License Section if a license is chosen in the prompts below

${renderLicenseSection(data.license)}
`;

module.exports = { generateMarkdown };
