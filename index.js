//Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkDown = require('./utils/generateMarkdown.js');

//Array of questions for user input
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
        name : 'installation',
        message :"Enter the information of installation"
         
     },

     {
        type: 'input',
        name : 'usage',
        message :"Enter the instructions for usage"
         
     },
     {
        type: 'input',
        name : 'contributing',
        message :"How can others contribute to this project"  
     }, 
     {
        type: 'input',
        name : 'tests',
        message :"Enter the test applied in the project"
         
     },
     
     {
        type: 'list',
        name: 'licenses',
        message: 'What license would you like to include?',
        choices: ['MIT', 'GPL', 'CC--0']
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub username:'},
   {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:'},

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
    inquirer.prompt(questions)
    .then(answers => {
      const markdown = generateMarkDown(answers);
      writeToFile('README.md', markdown);
    });
  }

// Function call to initialize app
init();
