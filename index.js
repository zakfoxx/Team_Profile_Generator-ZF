const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const fs = require("fs");
const saveData = [];
const generateHTML = require("./src/generate-html");

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
      console.log(answers);
      const newManager = new Manager(
        answers.managerName,
        answers.employeeId,
        answers.employeeEmail,
        answers.officeNumber
      );
      saveData.push(newManager);
      teamChoices();
    })
    .catch((error) => {
      console.log(error);
      // if (error.isTtyError) {
      //     // Prompt couldn't be rendered in the current environment
      // } else {
      //     // Something else went wrong
      // }
    });
}
prompt();
// const prompt2 = () => {};

function teamChoices() {
  inquirer
    .prompt([
      /* Pass your questions in here */
      {
        message: "What would you like to do?",
        choices: ["Add New Engineer", "Add New Intern", "Build Team"],
        type: "list",
        name: "decisionChoices",
      },
    ])
    .then((answers) => {
      switch (answers.decisionChoices) {
        case "Add New Engineer":
          return addEngineer();
        case "Add New Intern":
          return addIntern();
        default:
          return buildTeam();
      }
    })
    .catch((error) => {
      console.log(error);
      // if (error.isTtyError) {
      //     // Prompt couldn't be rendered in the current environment
      // } else {
      //     // Something else went wrong
      // }
    });
}
function addEngineer() {
  inquirer
    .prompt([
      /* Pass your questions in here */
      {
        message: "What is the engineer's name?",
        name: "engineerName",
      },
      {
        message: "What is the engineer's ID?",
        name: "engineerId",
      },
      {
        message: "What is the engineer's email?",
        name: "engineerEmail",
      },
      {
        message: "What is the engineer's Github?",
        name: "engineerGithub",
      },
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
      console.log(answers);
      const newEngineer = new Engineer(
        answers.engineerName,
        answers.engineerId,
        answers.engineerEmail,
        answers.engineerGithub
      );
      saveData.push(newEngineer);
      teamChoices();
    })
    .catch((error) => {
      console.log(error);
      // if (error.isTtyError) {
      //     // Prompt couldn't be rendered in the current environment
      // } else {
      //     // Something else went wrong
      // }
    });
}
function addIntern() {
  inquirer
    .prompt([
      /* Pass your questions in here */
      {
        message: "What is the intern's name?",
        name: "internName",
      },
      {
        message: "What is the intern's ID?",
        name: "internId",
      },
      {
        message: "What is the intern's email?",
        name: "internEmail",
      },
      {
        message: "What is the intern's school?",
        name: "internsSchool",
      },
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
      console.log(answers);
      const newIntern = new Intern(
        answers.internName,
        answers.internId,
        answers.internEmail,
        answers.internsSchool
      );
      saveData.push(newIntern);
      teamChoices();
    })
    .catch((error) => {
      console.log(error);
      // if (error.isTtyError) {
      //     // Prompt couldn't be rendered in the current environment
      // } else {
      //     // Something else went wrong
      // }
    });
}
function buildTeam() {
  generateHTML(saveData);
}
