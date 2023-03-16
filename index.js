
const Employee = require(`./lib/Employee.js`)
const Engineer = require(`./lib/Engineer.js`)
const Intern = require(`./lib/Intern.js`)
const Manager = require(`./lib/Manager.js`)
const generateTeam = require("./dist/template.js")
const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");
const { type } = require('os');
const dist_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(dist_DIR, "team.html");


const teamMemberArray = [];

function runApp() {

  function team() {
  inquirer
  .prompt([
    {
      type: 'list',
      message: 'What type of team member do you want to add?',
      choices: ['Manager', "Intern", 'Engineer', 'No more team members needed'],
      name: 'teamMember',
    }
  ])
  .then(function (answer) {
    switch(answer.teamMember) {
      case "Manager":
        addManager();
        break;
      case "Engineer":
        addEngineer();
        break;
      case "Intern":
        addIntern();
        break;

      default:
        htmlBuilder();
    }
  })
}


  function addManager() {
    inquirer
    .prompt ([
      {
        type: "input",
        message: "What is the manager's employee ID number?",
        name: "managerId"
      },
      {
        type: "input",
        message: "What is the manager's name?",
        name: "managerName"
      },

      {
        type: "input",
        message: "What is the manager's email address?",
        name: "managerEmail"
      },

      {
        type: "input",
        message: "What is the manager's office number?",
        name: "officeNumber"
      }
  ])
  .then(answer => {
    var manager = new Manager(answer.managerId, answer.managerName, answer.managerEmail, answer.officeNumber);
    teamMemberArray.push(manager);
    team();
  })
}

  function addEngineer() {
    inquirer
    .prompt ([
      {
        type: "input",
        message: "What is the engineers employee ID number?",
        name: "engineersId"
      },
      {
        type: "input",
        message: "What is the engineers name?",
        name: "engineersName"
      },

      {
        type: "input",
        message: "What is the engineers email address?",
        name: "engineersEmail"
      },

      {
        type: "input",
        message: "What is the engineers Github account?",
        name: "github"
      }
  ])
  .then(answer => {
    var manager = new Engineer(answer.engineersId, answer.engineersName, answer.engineersEmail, answer.github);
    teamMemberArray.push(manager);
    team();
  })
  }

  function addIntern() {
    inquirer
    .prompt ([
      {
        type: "input",
        message: "What is the interns employee ID number?",
        name: "internId"
      },
      {
        type: "input",
        message: "What is the interns name?",
        name: "internsName"
      },

      {
        type: "input",
        message: "What is the interns email address?",
        name: "intenEmail"
      },

      {
        type: "input",
        message: "What school does the intern go to?",
        name: "school"
      }
  ])
  .then(answer => {
    var manager = new Intern(answer.internId, answer.internsName, answer.intenEmail, answer.school);
    teamMemberArray.push(manager);
    team();
  })
}



  function htmlBuilder () {
    console.log("Your team has been created!")

    fs.writeFileSync('./dist/index.html', generateTeam(teamMemberArray), "UTF-8")

}

team();

}

runApp();