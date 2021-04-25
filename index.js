// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const util = require('util');

// TODO: Create an array of questions for user input
const questions = [{
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a description for your project..."
    },
    {

        type: "list",
        name: "license",
        message: "What license should your project have?",
        choices: ['MIT', 'Apache', 'None', 'GPL', 'BSD','EPL']
    },
    {
        type: "input",
        name: "Github",
        message: "What is your Github username?",
    },
    {
        type: "input",
        name: "Email",
        message: "What is your email address?",
    },

    {
        type: "input",
        name: "installation",
        message: "what command did you use to install dependencies?",

    },
];


// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    writeFileAsync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    console.log("Running....")
        //Ask the user the relevant questions needed for the read me
    inquirer.prompt(questions).then(responses => {
        //Take the users responses which are in an object and pass them to generateMarkdown
        //This returns a string which we can then use to pass to writeToFile to create the readme

        let readMeString = generateMarkdown({...responses })
        writeToFile('README.md', readMeString);

    })

}

// Function call to initialize app
init();