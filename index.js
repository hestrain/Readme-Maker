// TODO: Include packages needed for this application
var inquirer = require("inquirer");
const generate = require("./utils/generateMarkdown.js");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = {
  title: "Project Title",
  description: "Description of Project",
  installation: "Installation Instructions",
  usage: "Usage Information",
  contribute: "Contribution Guidelines",
  test: "Test Instructions",
  license: "License",
  github: "Github Username",
  email: "Email Address",
};

// TODO: Create a function to write README file
function writeToFile(fileName, response) {
  const title = `# ${response.title}\n`;
  fs.writeFile(fileName, title, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("title success");
    }
  });

  fs.appendFile(fileName, generate.generateMarkdown(response), (err) =>
    err ? console.error(err) : console.log("description logged!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      /* Pass your questions in here */
      {
        type: "input",
        message: questions.title,
        name: "title",
      },
      {
        type: "input",
        message: questions.description,
        name: "description",
      },
      {
        type: "input",
        message: questions.installation,
        name: "installation",
      },
      {
        type: "input",
        message: questions.usage,
        name: "usage",
      },
      {
        type: "input",
        message: questions.contribute,
        name: "contribute",
      },
      {
        type: "input",
        message: questions.test,
        name: "test",
      },
      {
        type: "list",
        message: questions.license,
        name: "license",
        choices: [
          "none",
          "Apache License 2.0",
          "GNU General Public License v3.0",
          "MIT License",
          "BSD 2-Clause 'Simplified' License",
          "BSD 3-Clause 'New' or 'Revised' License",
          "Boost Software License 1.0",
          "Creative Commons Zero v1.0 Universal",
          "Eclipse Public License 2.0",
          "GNU Affero General Public License v3.0",
          "GNU General Public License v2.0",
          "GNU Lesser General Public License v2.1",
          "Mozilla Public License 2.0",
          "The Unlicense",
        ],
      },
      {
        type: "input",
        message: questions.github,
        name: "github",
      },
      {
        type: "input",
        message: questions.email,
        name: "email",
      },
    ])
    .then((response) => {
      // const answers = {
      //     title: response.title,
      //     description: response.description,
      //     installation: response.installation,
      //     usage: response.usage,
      //     contribute: response.contribute,
      //     test: response.test,
      //     license: response.license,
      //     github: response.github,
      //     email: response.email,
      // }

      let fileName = `${response.title}.md`;
      console.log(response);
      writeToFile(fileName, response);
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        console.log(error);
      } else {
        // Something else went wrong
        console.log(error);
      }
    });
}

// Function call to initialize app
init();
