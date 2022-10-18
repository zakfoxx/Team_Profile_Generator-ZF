// const Employee = require("../lib/Employee");
// const Manager = require("../lib/Manager");
const generateTeam = (team) => {
  function createManagerCard(manager) {
    return `
        <div>
        <h2>Manager</h2>
        <h1>
            ${manager.getName()}
            ${manager.getId()}
        </h1>
        <p>
            ${manager.getEmail()}
        </p>
        <p>
         ${manager.getOfficeNumber()}
        </p>
    </div>
    `;
  }
  function createInternCard(intern) {
    return `
        <div>
        <h2>Intern</h2>
        <h1>
            ${intern.getName()}
            ${intern.getId()}
        </h1>
        <p>
            ${intern.getEmail()}
        </p>
        <p>
         ${intern.getSchool()}
        </p>
    </div>
    `;
  }
  function createEngineerCard(engineer) {
    return `
        <div>
        <h2>Engineer</h2>
        <h1>
            ${engineer.getName()}
            ${engineer.getId()}
        </h1>
        <p>
            ${engineer.getEmail()}
        </p>
        <p>
         ${engineer.getGithub()}
        </p>
    </div>
    `;
  }
  const allHTML = [];
  allHTML.push(
    team
      .filter((Employee) => Employee.getRole() === "Manager")
      .map((manager) => createManagerCard(manager))
  );
  allHTML.push(
    team
      .filter((Employee) => Employee.getRole() === "Intern")
      .map((intern) => createInternCard(intern))
      .join("")
  );
  allHTML.push(
    team
      .filter((Employee) => Employee.getRole() === "Engineer")
      .map((engineer) => createEngineerCard(engineer))
      .join("")
  );

  return allHTML.join("");
};
module.exports = (team) => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    ${generateTeam(team)}
</body>
</html>
    `;
};
