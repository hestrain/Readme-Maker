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
        "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
      // fs.appendFile("README.md", licenseBadge, (err) =>
      //   err ? console.error(err) : console.log("made the badge")
      // );
      return licenseBadge;
    case "GNU General Public License v3.0":
      licenseBadge =
        "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
      // fs.appendFile("README.md", licenseBadge, (err) =>
      //   err ? console.error(err) : console.log("made the badge")
      // );
      return licenseBadge;
    case "MIT License":
      licenseBadge =
        "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
      // fs.appendFile("README.md", licenseBadge, (err) =>
      //   err ? console.error(err) : console.log("made the badge")
      // );
      return licenseBadge;
    case "BSD 2-Clause 'Simplified' License":
      licenseBadge =
        "![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)";
      // fs.appendFile("README.md", licenseBadge, (err) =>
      //   err ? console.error(err) : console.log("made the badge")
      // );
      return licenseBadge;
    case "BSD 3-Clause 'New' or 'Revised' License":
      licenseBadge =
        "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)";
      // fs.appendFile("README.md", licenseBadge, (err) =>
      //   err ? console.error(err) : console.log("made the badge")
      // );
      return licenseBadge;
    case "Boost Software License 1.0":
      licenseBadge =
        "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)";
      // fs.appendFile("README.md", licenseBadge, (err) =>
      //   err ? console.error(err) : console.log("made the badge")
      // );
      return licenseBadge;
    case "Creative Commons Zero v1.0 Universal":
      licenseBadge =
        "![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)";
      // fs.appendFile("README.md", licenseBadge, (err) =>
      //   err ? console.error(err) : console.log("made the badge")
      // );
      return licenseBadge;
    case "Eclipse Public License 2.0":
      licenseBadge =
        "![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)";
      // fs.appendFile("README.md", licenseBadge, (err) =>
      //   err ? console.error(err) : console.log("made the badge")
      // );
      return licenseBadge;
    case "GNU Affero General Public License v3.0":
      licenseBadge =
        "![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)";
      // fs.appendFile("README.md", licenseBadge, (err) =>
      //   err ? console.error(err) : console.log("made the badge")
      // );
      return licenseBadge;
    case "GNU General Public License v2.0":
      licenseBadge =
        "![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)";
      // fs.appendFile("README.md", licenseBadge, (err) =>
      //   err ? console.error(err) : console.log("made the badge")
      // );
      return licenseBadge;
    case "Mozilla Public License 2.0":
      licenseBadge =
        "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)";
      // fs.appendFile("README.md", licenseBadge, (err) =>
      //   err ? console.error(err) : console.log("made the badge")
      // );
      return licenseBadge;
    case "GNU Lesser General Public License v2.1":
      licenseBadge =
        "![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)";
      // fs.appendFile("README.md", licenseBadge, (err) =>
      //   err ? console.error(err) : console.log("made the badge")
      // );
      return licenseBadge;
    case "The Unlicense":
      licenseBadge =
        "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)";
      // fs.appendFile("README.md", licenseBadge, (err) =>
      //   err ? console.error(err) : console.log("made the badge")
      // );
      return licenseBadge;
    default:
      console.log("Error");
      break;
  }
  console.log(licenseBadge + licenseLink);
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
      return licenseLink;
    case "GNU General Public License v3.0":
      licenseLink = "(https://www.gnu.org/licenses/gpl-3.0)";
      // fs.appendFile("README.md", licenseLink, (err) =>
      //   err ? console.error(err) : console.log("made the badge")
      // );
      return licenseLink;
    case "MIT License":
      licenseLink = "((https://opensource.org/licenses/MIT)";
      // fs.appendFile("README.md", licenseLink, (err) =>
      //   err ? console.error(err) : console.log("made the badge")
      // );
      return licenseLink;
    case "BSD 2-Clause 'Simplified' License":
      licenseLink = "(https://opensource.org/licenses/BSD-2-Clause)";
      // fs.appendFile("README.md", licenseLink, (err) =>
      //   err ? console.error(err) : console.log("made the badge")
      // );
      return licenseLink;
    case "BSD 3-Clause 'New' or 'Revised' License":
      licenseLink = "(https://opensource.org/licenses/BSD-3-Clause)";
      // fs.appendFile("README.md", licenseLink, (err) =>
      //   err ? console.error(err) : console.log("made the badge")
      // );
      return licenseLink;
    case "Boost Software License 1.0":
      licenseLink = "(https://www.boost.org/LICENSE_1_0.txt)";
      // fs.appendFile("README.md", licenseLink, (err) =>
      //   err ? console.error(err) : console.log("made the badge")
      // );
      return licenseLink;
    case "Creative Commons Zero v1.0 Universal":
      licenseLink = "(http://creativecommons.org/publicdomain/zero/1.0/)";
      // fs.appendFile("README.md", licenseLink, (err) =>
      //   err ? console.error(err) : console.log("made the badge")
      // );
      return licenseLink;
    case "Eclipse Public License 2.0":
      licenseLink = "(https://opensource.org/licenses/EPL-1.0)";
      // fs.appendFile("README.md", licenseLink, (err) =>
      //   err ? console.error(err) : console.log("made the badge")
      // );
      return licenseLink;
    case "GNU Affero General Public License v3.0":
      licenseLink = "(https://www.gnu.org/licenses/agpl-3.0)";
      // fs.appendFile("README.md", licenseLink, (err) =>
      //   err ? console.error(err) : console.log("made the badge")
      // );
      return licenseLink;
    case "GNU General Public License v2.0":
      licenseLink =
        "(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
      // fs.appendFile("README.md", licenseLink, (err) =>
      //   err ? console.error(err) : console.log("made the badge")
      // );
      return licenseLink;
    case "GNU Lesser General Public License v2.1":
      licenseLink = "(https://www.gnu.org/licenses/lgpl-3.0)";
      // fs.appendFile("README.md", licenseLink, (err) =>
      //   err ? console.error(err) : console.log("made the badge")
      // );

      return licenseLink;
    case "Mozilla Public License 2.0":
      licenseLink = "(https://opensource.org/licenses/MPL-2.0)";
      // fs.appendFile("README.md", licenseLink, (err) =>
      //   err ? console.error(err) : console.log("made the badge")
      // );
      return licenseLink;

    case "The Unlicense":
      licenseLink = "(http://unlicense.org/)";
      // fs.appendFile("README.md", licenseLink, (err) =>
      //   err ? console.error(err) : console.log("made the badge")
      // );
      return licenseLink;

    default:
      console.log("Error");
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let fullLicense = `[${renderLicenseBadge(license)}]${renderLicenseLink(
    license
  )}`;

  return fullLicense;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  let newMarkdown = `
  ${renderLicenseBadge(response.license)}\n

  ## Table of Contents
<ol>
<li>
<a href="#description"> Description </a>
</li>
<li> <a href="#built-with"> Built With </a>
</li>
<li><a href="#installation"> Installation </a>
</li>
<li>
<a href="#usage"> Usage </a>
</li>
<li><a href="#contributions"> Contributions </a>
</li>
<li>
<a href="#testing"> Testing </a>
</li>
<li>
<a href="#license"> License </a>
</li>
<li>
<a href="#contact"> Contact </a>
</li> 
</ol>

## Description \n 
  ${response.description}\n 

### Built With: \n
  [![VS Code](https://img.shields.io/badge/IDE-VSCode-0000ff?style=plastic&logo=VisualStudioCode&logoWidth=10)](https://code.visualstudio.com/docs)
  [![Javascript](https://img.shields.io/badge/Language-JavaScript-ff0000?style=plastic&logo=JavaScript&logoWidth=10)](https://javascript.info/)
  [![Node Current](https://img.shields.io/node/inquirer)](https://www.npmjs.com/package/inquirer)

## Installation \n 
   ${response.installation}\n
## Usage \n

1. Clone the rep using the below in your terminal: \n

git clone ${response.repo}.git \n

2. Right click on index.html and open in browser to enjoy locally! \n

**Additional Usage Info:** 
   ${response.usage}\n
## Testing \n
  ${response.test}\n
## Contributions \n
   Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**. \n
\n
If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".\n
Don't forget to give the project a star! Thanks again!\n

1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

\n \n **Additional Contribution Details:** 
   ${response.contribute}\n
## License \n 
  This project is licensed under ${response.license}. For more information please click on the badge below: 
  \n \n ${renderLicenseSection(response.license)}\n
## Contact \n 
**For Questions, please reach out to me on Github or by Email** \n
  - Github: 
   [${response.github}](https://github.com/${response.github})\n
  - Email Address: 
  [${response.email}](${response.email})\n
  ### Project Links: \n
 - [Github Repository](${response.repo})\n
 - [Deployed Site](${response.deploy})`;

  return newMarkdown;
}

module.exports = {
  generateMarkdown,
};
