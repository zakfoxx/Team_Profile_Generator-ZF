const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const fs = require("fs");

// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

function prompt() {
  inquirer
    .prompt([
      /* Pass your questions in here */
      {
        message: "What is the team manager's name?",
        name: "managerName",
      },
      {
        message: "What is the employee ID?",
        name: "employeeId",
      },
      {
        message: "What is the employee email?",
        name: "employeeEmail",
      },
      {
        message: "What is the employee office number?",
        name: "officeNumber",
      },
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}
const prompt2 = () => {};
