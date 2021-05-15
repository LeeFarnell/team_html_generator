const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

const renderManagerCard = (employee) => {
  return `
  <div class="card m-1 p-0 col-3 shadow-sm">
    <div class="card-body bg-info">
      <h5 class="card-title">${employee.name}</h5>
      <p class="card-text">Role: Manager <span><i class="fas fa-briefcase"></i></span> </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${employee.employeeID}</li>
      <li class="list-group-item">
        Email: <a href="mailto:${employee.email}">${employee.email}</a>
      </li>
      <li class="list-group-item">Office Number: ${employee.officeNumber}</li>
    </ul>
  </div>`;
};

const renderEngineerCard = (employee) => {
  return `
  <div class="card m-1 p-0 col-3 shadow-sm">
    <div class="card-body bg-info">
      <h5 class="card-title">${employee.name}</h5>
      <p class="card-text">Role: Engineer <span><i class="fas fa-wrench"></i>

      </span></p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${employee.employeeID}</li>
      <li class="list-group-item">
        Email: <a href="mailto:${employee.email}">${employee.email}</a>
      </li>
      <li class="list-group-item">GitHub Link: <a href="https://github.com/${employee.github}">${employee.github}</a> </li>
    </ul>
  </div>`;
};

const renderInternCard = (employee) => {
  return `
  <div class="card m-1 p-0 col-3 shadow-sm">
    <div class="card-body bg-info">
      <h5 class="card-title">${employee.name}</h5>
      <p class="card-text">Role: Intern <span><i class="fas fa-graduation-cap"></i>

      </span></p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${employee.employeeID}</li>
      <li class="list-group-item">
        Email: <a href="mailto:${employee.email}">${employee.email}</a>
      </li>
      <li class="list-group-item">School: ${employee.school}</li>
    </ul>
  </div>`;
};

const generateHTML = (employees) => {
  const renderCards = (employee) => {
    if (employee instanceof Manager) {
      console.log(employee, "1");
      return renderManagerCard(employee);
    }
    if (employee instanceof Engineer) {
      console.log(employee, "1");
      return renderEngineerCard(employee);
    }
    if (employee instanceof Intern) {
      console.log(employee, "1");
      return renderInternCard(employee);
    }
  };

  const employeeCards = employees.map(renderCards);

  console.log(employeeCards);

  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0"
        crossorigin="anonymous"
      />
  
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossorigin="anonymous"
      />

      <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />

      <link rel="stylesheet" href="./sample-style.css" />
      <title>My Team</title>
    </head>
    <body>
      <header>
        <div class="bg-danger m-0 p-2 text-white text-center">
          <h1>My Team!</h1>
        </div>
      </header>
      <main>
        <div class="container m-0 row text-center">
        ${employeeCards.join("")}
            
        </div>
      </main>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8"
        crossorigin="anonymous"
      ></script>
  
      <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
      <script src="../src/index.js"></script>
    </body>
  </html>
  
  `;
};

module.exports = generateHTML;
