const Manager = require("../lib/Manager");

function createCards(team) {
  const managerHTML = team
    .filter((manager) => manager.getRole() === "Manager")
    .map((manager) => createManagerCard(manager));
  const internHTML = team.filter((intern) => intern.getRole() === "Intern");
  const engineerHTML = team.filter(
    (engineer) => engineer.getRole() === "Engineer"
  );
  const allHTML = [...managerHTML, ...internHTML, ...engineerHTML];
  return allHTML.join("");
}
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
module.exports = (team) => {
  `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    ${createCards(team)}
</body>
</html>
    `;
};
