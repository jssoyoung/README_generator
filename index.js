const fs = require('fs');
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { writeFile } = require('fs').promises;

// Array of questions for user input
function init() {
inquirer
    .prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description explaining what your project is and why you built it'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples of how to use your project'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of a license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Write tests for your application. Provide examples here.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
])
.then((answers) => {
    const pageContent = generateMarkdown(answers);
    writeFile('README.md', pageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
    );
});
}

init();