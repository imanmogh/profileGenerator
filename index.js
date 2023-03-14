/*GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated */

const employee = require(`./lib/Employee.js`)
const engineer = require(`./lib/Engineer.js`)
const intern = require(`./lib/Intern.js`)
const manager = require(`./lib/Manager.js`)


const inquirer = require('inquirer');
const fs = require('fs');
const { type } = require('os');
const Manager = require('./lib/Manager.js');


const teamMemberArray = [];


function team() {
  inquirer
  .prompt([
    {
      type: 'list',
      message: 'What type of team member do you want to add?',
      choices: ['Manager', "Intern", 'Engineer', 'No more team members needed'],
      name: 'teamMember',
    },
  ])
  .then(function (answer){
    if (answer.teamMember === 'Manager') {
      return addManager;
    }
    else if (answer.teamMember === 'Intern') {
      return addIntern;
    }
    else if (answer.teamMember === 'Engineer') {
      return addEngineer;
    }
    else {
      return "All team members are added. Thank you."
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
    var manager = new Manager(answer.engineersId, answer.engineersName, answer.engineersEmail, answer.github);
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
    var manager = new Manager(answer.internId, answer.internsName, answer.intenEmail, answer.school);
    teamMemberArray.push(manager);
    team();
  })
  }
