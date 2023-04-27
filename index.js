// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkDown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
// of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
    {
       type: 'input',
       name : 'title',
       message :"Enter the project title"
        
    },
    {
        type: 'input',
        name : 'description',
        message :"Enter the project description"
         
     },
     {
        type: 'input',
        name : 'table',
        message :"Enter the table of contents"
         
     },
     {
        type: 'input',
        name : 'installation',
        message :"Enter the installation information"
         
     },
     {
        type: 'input',
        name : 'usage',
        message :"Enter the instruction of usage"
         
     },
     {
        type: 'input',
        name : 'contribution',
        message :"Do anyone have contribution in the project"
         
     }, {
        type: 'input',
        name : 'tests',
        message :"Enter the test applied in the project"
         
     },
     {
        type: 'input',
        name : 'question',
        message :"Do you have any question"
         
     },
     {
        type: 'list',
        name: 'licenses',
        message: 'What license would you like to include?',
        choices: ['MIT', 'GPL', 'CC--0']
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
      if (err) {
        console.error(err);
      } else {
        console.log('File written successfully');
      }
    });
  }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
      const markdown = generateMarkDown(answers);
      writeToFile('README.md', markdown);
    });
  }

// Function call to initialize app
init();
