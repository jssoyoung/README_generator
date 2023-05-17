// Returns a license badge based on which license is passed in. If there is no license, returns an empty string
function renderLicenseBadge(license) {
    if (license === 'MIT' || license === 'APACHE_2.0' || license === 'GPL_3.0' || license === 'BSD_3') {
        return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`
    } else {return ""}
}

// Returns the license link. If there is no license, returns an empty string
function renderLicenseLink(license) {
    if (license === 'MIT' || license === 'APACHE_2.0' || license === 'GPL_3.0' || license === 'BSD_3') {
        return `\n* [License](#license)\n`
    } else {return ""}
}

// Returns the license section of README. If there is no license, returns an empty string
function renderLicenseSection(license) {
    if (license === 'MIT' || license === 'APACHE_2.0' || license === 'GPL_3.0' || license === 'BSD_3') {
        return `## License
        
        This project is licensed under the ${license} license.`
    } else {return ""}
}

// Function to generate markdown for README
function generateMarkdown (data) {
return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  ${renderLicenseLink(data.license)}
* [Tests](#test)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

${renderLicenseSection(data.license)}
 
## Tests
${data.tests}

## Questions
Here is my github: github.com/${data.github}

This is also my email if you wish to reache me with additional questions: ${data.email}
`;
};

module.exports = generateMarkdown;
