// Returns a license badge based on which license is passed in. If there is no license, returns an empty string
// TODO why doesnt badge show? how to put it at the top of README
//WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
function renderLicenseBadge(license) {
    if (license === 'MIT' || license === 'APACHE 2.0' || license === 'GPL 3.0' || license === 'BSD 3') {
        return `![GitHub license]https://img.shields.io/badge/license-${license}-blue.svg`
    } else {return ""}
}

// Returns the license link. If there is no license, returns an empty string
// TODO why doesnt it show?
function renderLicenseLink(license) {
    if (license === 'MIT' || license === 'APACHE 2.0' || license === 'GPL 3.0' || license === 'BSD 3') {
        return `\n* [License](#license)\n`
    } else {return ""}
}

// Returns the license section of README. If there is no license, returns an empty string
function renderLicenseSection(license) {
    if (license === 'MIT' || license === 'APACHE 2.0' || license === 'GPL 3.0' || license === 'BSD 3') {
        return `This project is licensed under the ${license} license.`
    } else {return ""}
}

// Function to generate markdown for README
function generateMarkdown (data) {
return `# ${data.title}
  ## Description
  ${data.description}

  ## Table of Contents
 ????????? - when clicked it should go to corresponding sections

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## License
  ${renderLicenseSection(data.license)}

  ## Tests
  ${data.tests}

  ## Questions
  Here is my github: github.com/${data.github}
  This is also my email if you wish to reache me with additional questions: ${data.email}
`;
};

module.exports = generateMarkdown;
