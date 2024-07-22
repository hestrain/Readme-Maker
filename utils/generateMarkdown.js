// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let licenseBadge = "";
let licenseLink = "";
function renderLicenseBadge(license) {
  switch (license) {
    case "none":
      // fs.appendFile("README.md", licenseBadge, (err) =>
      //   err ? console.error(err) : console.log("no badge needed")
      // );
      break;
    case "Apache License 2.0":
      licenseBadge =
        "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
      // fs.appendFile("README.md", licenseBadge, (err) =>
      //   err ? console.error(err) : console.log("made the badge")
      // );
      break;
    case "GNU General Public License v3.0":
      licenseBadge =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
      // fs.appendFile("README.md", licenseBadge, (err) =>
      //   err ? console.error(err) : console.log("made the badge")
      // );
      break;
    case "MIT License":
      licenseBadge =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
      // fs.appendFile("README.md", licenseBadge, (err) =>
      //   err ? console.error(err) : console.log("made the badge")
      // );
      break;
    case "BSD 2-Clause 'Simplified' License":
      licenseBadge =
        "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]";
      // fs.appendFile("README.md", licenseBadge, (err) =>
      //   err ? console.error(err) : console.log("made the badge")
      // );
      break;
      case "BSD 3-Clause 'New' or 'Revised' License":
        licenseBadge =
          "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]";
        // fs.appendFile("README.md", licenseBadge, (err) =>
        //   err ? console.error(err) : console.log("made the badge")
        // );
        break;
    case "Boost Software License 1.0":
      licenseBadge =
        "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]";
      // fs.appendFile("README.md", licenseBadge, (err) =>
      //   err ? console.error(err) : console.log("made the badge")
      // );
      break;
    case "Creative Commons Zero v1.0 Universal":
      licenseBadge =
        "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]";
      // fs.appendFile("README.md", licenseBadge, (err) =>
      //   err ? console.error(err) : console.log("made the badge")
      // );
      break;
    case "Eclipse Public License 2.0":
      licenseBadge =
        "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]";
      // fs.appendFile("README.md", licenseBadge, (err) =>
      //   err ? console.error(err) : console.log("made the badge")
      // );
      break;
    case "GNU Affero General Public License v3.0":
      licenseBadge =
        "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]";
      // fs.appendFile("README.md", licenseBadge, (err) =>
      //   err ? console.error(err) : console.log("made the badge")
      // );
      break;
    case "GNU General Public License v2.0":
      licenseBadge =
        "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]";
      // fs.appendFile("README.md", licenseBadge, (err) =>
      //   err ? console.error(err) : console.log("made the badge")
      // );
      break;
    case "Mozilla Public License 2.0":
      licenseBadge =
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]";
      // fs.appendFile("README.md", licenseBadge, (err) =>
      //   err ? console.error(err) : console.log("made the badge")
      // );
      break;
    case "GNU Lesser General Public License v2.1":
      licenseBadge =
        "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]";
      // fs.appendFile("README.md", licenseBadge, (err) =>
      //   err ? console.error(err) : console.log("made the badge")
      // );
      break;
    case "The Unlicense":
      licenseBadge =
        "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]";
      // fs.appendFile("README.md", licenseBadge, (err) =>
      //   err ? console.error(err) : console.log("made the badge")
      // );
      break;
    default:
      console.log("Error");
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "none":
      // fs.appendFile("README.md", licenseLink, (err) =>
      //   err ? console.error(err) : console.log("no link needed")
      // );
      break;
    case "Apache License 2.0":
      licenseLink = "(https://opensource.org/licenses/Apache-2.0)";
      // fs.appendFile("README.md", licenseLink, (err) =>
      //   err ? console.error(err) : console.log("made the link")
      // );
      break;
    case "GNU General Public License v3.0":
      licenseLink = "(https://www.gnu.org/licenses/gpl-3.0)";
      // fs.appendFile("README.md", licenseLink, (err) =>
      //   err ? console.error(err) : console.log("made the badge")
      // );
      break;
    case "MIT License":
      licenseLink = "((https://opensource.org/licenses/MIT)";
      // fs.appendFile("README.md", licenseLink, (err) =>
      //   err ? console.error(err) : console.log("made the badge")
      // );
      break;
    case "BSD 2-Clause 'Simplified' License":
      licenseLink = "(https://opensource.org/licenses/BSD-2-Clause)";
      // fs.appendFile("README.md", licenseLink, (err) =>
      //   err ? console.error(err) : console.log("made the badge")
      // );
      break;
    case "BSD 3-Clause 'New' or 'Revised' License":
      licenseLink = "(https://opensource.org/licenses/BSD-3-Clause)";
      // fs.appendFile("README.md", licenseLink, (err) =>
      //   err ? console.error(err) : console.log("made the badge")
      // );
      break;
    case "Boost Software License 1.0":
      licenseLink = "(https://www.boost.org/LICENSE_1_0.txt)";
      // fs.appendFile("README.md", licenseLink, (err) =>
      //   err ? console.error(err) : console.log("made the badge")
      // );
      break;
    case "Creative Commons Zero v1.0 Universal":
      licenseLink = "(http://creativecommons.org/publicdomain/zero/1.0/)";
      // fs.appendFile("README.md", licenseLink, (err) =>
      //   err ? console.error(err) : console.log("made the badge")
      // );
      break;
    case "Eclipse Public License 2.0":
      licenseLink = "(https://opensource.org/licenses/EPL-1.0)";
      // fs.appendFile("README.md", licenseLink, (err) =>
      //   err ? console.error(err) : console.log("made the badge")
      // );
      break;
    case "GNU Affero General Public License v3.0":
      licenseLink = "(https://www.gnu.org/licenses/agpl-3.0)";
      // fs.appendFile("README.md", licenseLink, (err) =>
      //   err ? console.error(err) : console.log("made the badge")
      // );
      break;
    case "GNU General Public License v2.0":
      licenseLink = "(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
      // fs.appendFile("README.md", licenseLink, (err) =>
      //   err ? console.error(err) : console.log("made the badge")
      // );
      break;
    case "GNU Lesser General Public License v2.1":
      licenseLink = "(https://www.gnu.org/licenses/lgpl-3.0)";
      // fs.appendFile("README.md", licenseLink, (err) =>
      //   err ? console.error(err) : console.log("made the badge")
      // );
      break;
    case "Mozilla Public License 2.0":
      licenseLink = "(https://opensource.org/licenses/MPL-2.0)";
      // fs.appendFile("README.md", licenseLink, (err) =>
      //   err ? console.error(err) : console.log("made the badge")
      // );
      break;
    case "The Unlicense":
      licenseLink = "(http://unlicense.org/)";
      // fs.appendFile("README.md", licenseLink, (err) =>
      //   err ? console.error(err) : console.log("made the badge")
      // );
      break;

    default:
      console.log("Error");
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let fullLicense = renderLicenseBadge(license) +renderLicenseLink(license);
  return fullLicense;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
let newMarkdown = 
  `#${response.title} \n
  ## Descritpion \n 
  ${response.description}\n ${renderLicenseBadge(response.license)}\n
  ## Installation \n 
   ${response.installation}\n
  ## Usage \n
   ${response.usage}\n
   ## Contributions \n
   ${response.contribute}\n
  ## Testing \n
   ${response.test}\n
   ## License \n 
   ${response.license}\n ${renderLicenseSection(response.license)}\n
   ## Contact \n 
   Github: 
   [${response.github}](github.com/${response.github})\n
  Email Address: 
  [${response.email}](${response.email})\n`;
  
  return newMarkdown;
}

module.exports = 
{
  generateMarkdown
};


