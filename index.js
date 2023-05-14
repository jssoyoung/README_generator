const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const generateHTML = ({ name, location, github, linkedin }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>README.md</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">${title}</h1>
    <nav class="nav">${table_of_contents}</nav>
    <p class="lead">Description${description}.</p>
    <p class="lead">Installation${installation}.</p>
    <p class="lead">Usage${usage}.</p>
    <p class="lead">Credits${credits}.</p>
    <p class="lead">License${license}.</p>
    <p class="lead">Tests${tests}.</p>
    <p class="lead">Questions</p>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${github}</li>
      <li class="list-group-item">Email: ${email}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

// TODO: Create an array of questions for user input
const questions = [
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
        name: 'table_of_contents',
        message: 'Table of contents'
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
        message: 'License'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Tests'
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // TODO add fs code here to save file
    const pageContent = generateREADME(data);
    fs.writeFile('index.html', pageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(answers) {
        const markdownText = generateMarkdown(answers);
        writeToFile('whatevs', markdownText);
    })
}

// Function call to initialize app
init();
