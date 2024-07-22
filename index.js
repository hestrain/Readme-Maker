// TODO: Include packages needed for this application
var inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown");
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
function writeToFile(response) {
  const title = `# ${response.title}\n`;
  const description = `## Descritpion \n ${response.description}\n`;
  const installation = `## Installation \n ${response.installation}\n`;
  const usage = `## Usage \n ${response.usage}\n`;
  const contribute = `## Contributions \n ${response.contribute}\n`;
  const test = `## Testing \n ${response.test}\n`;
  const license = `## License \n ${response.license}\n`;
  const github = `## Contact \n Github: [${response.github}](github.com/${response.github})\n`;
  const email = `Email Address: [${response.email}](${response.email})\n`;
  
  fs.writeFile("README.md", title, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("success");
    }
    fs.appendFile('README.md', description, (err) =>
        err ? console.error(err) : console.log('description logged!')
      );
      fs.appendFile('README.md', installation, (err) =>
        err ? console.error(err) : console.log('installation logged!')
      );     
      fs.appendFile('README.md', usage, (err) =>
        err ? console.error(err) : console.log('usage logged!')
    );
      fs.appendFile('README.md', contribute, (err) =>
        err ? console.error(err) : console.log('contribution logged!')
    );
      fs.appendFile('README.md', test, (err) =>
        err ? console.error(err) : console.log('test logged!')
      );
      fs.appendFile('README.md', license, (err) =>
        err ? console.error(err) : console.log('license logged!')
      );
      fs.appendFile('README.md', github, (err) =>
        err ? console.error(err) : console.log('github logged!')
      );
      fs.appendFile('README.md', email, (err) =>
        err ? console.error(err) : console.log('email logged!')
      );
  });
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

      console.log(response);
      writeToFile(response);
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
