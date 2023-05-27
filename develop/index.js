// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is your project's title?",
    },
    {
        type: 'input',
        name: 'description',
        message: "What is the description of your project?",
    },
    {
        type: 'input',
        name: 'installation',
        message: "How to install your application?",
    },
    {
        type: 'input',
        name: 'usage',
        message: "Provide usage instructions for your project.",
    },
    {
        type: 'input',
        name: 'test',
        message: "What is the test instructions for your project?",
    },
    {
        type: 'list',
        name: 'license',
        message: "Choose a license for your project.",
        choices: ['MIT', 'APACHE_2.0', 'GPL_3.0', 'BSD_3', 'None' ]
    },
    {
        type: 'input',
        name: 'contributing',
        message: "How to contribute your project?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email?",
    },
    {
        type: 'input',
        name: 'github',
        message: "What is your github username?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFileSync(path.join(__dirname, fileName), data);

}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
