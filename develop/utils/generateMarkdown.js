// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![Project license](https://img.shields.io/badge/license-${license}-yellow.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  function renderLicenseLink(license) {
    if (license !== 'None') {
      return `\n* [License](#license)\n`;
    }
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description};

  ## Table of Contents

  * [Installation](#installaction)

  * [Usage](#usage)

  * [Test](#test)

  * [Contributing](#contributing)

  * [Email](#email)

  * [Github](#github)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Test
  ${data.test}

  ## Contributing
  ${data.contributing}

  ## Email
  ${data.email}

  ## Github
  ${data.github}
`;
}

module.exports = generateMarkdown;
