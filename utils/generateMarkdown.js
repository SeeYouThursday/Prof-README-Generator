const fs = require("fs");
const { fileURLToPath } = require("url");

////Render License Badge towards to the top
// If there is no license, return an empty string
const renderLicenseBadge = (license) =>
  license !== "None"
    ? `\n\n![Static Badge](https://img.shields.io/badge/${license}-content)`
    : "";

////Render License Link
// If there is no license, return an empty string
const renderLicenseLink = (license) =>
  license !== "None" ? `\n- [License](#license)` : "";

////Render License Section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) =>
  license !== "None"
    ? `\n\n## License\n\n**Note: This application is covered under the ${license} License.**`
    : "";

// If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

////Render Usage Screenshot/Gif
const screenshot = (filePath, altText) =>
  filePath
    ? `\n![#${altText}](${filePath})`
    : console.log("no screenshot provided");

//// Generate markdown for README
const generateMarkdown = (data) =>
  `# ${data.title}${renderLicenseBadge(data.license)}

## Description
  
${data.description}
  
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)${renderLicenseLink(data.license)}
- [Questions](#questions)

## Installation
  
${data.install}
  
## Usage
  
${data.usage}${screenshot(data.img, data.altText)}
  
## Contributing

${data.contribution}

## Tests

${data.tests}${renderLicenseSection(data.license)}

## Questions

[![GitHub Badge](https://img.shields.io/badge/${
    data.github
  }-content?logo=github)](https://github.com//${data.github})

How to contact me with questions:
[${data.email}](${data.email})
`;

module.exports = { generateMarkdown };
