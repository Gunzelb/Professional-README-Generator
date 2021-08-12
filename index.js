const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    default: 'Project Title'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please enter a description of the project:',
    default: 'A brief description of the project.'
  },
  {
    type: 'input',
    name: 'install',
    message: 'Please enter instructions for installation of your project:',
    default: 'Installation instructions:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please enter usage information on your project:',
    default: 'Usage information is displayed here.'
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Please enter contribution guidelines for your project:',
    default: 'Some basic contribution guidelines go here.'
  },
  {
    type: 'input',
    name: 'test',
    message: 'Please enter instructions for testing your project:',
    default: 'Some testing instructions go here.'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Select a license for your project:',
    choices: ['GNU AGPLv3 License', 'GNU GPLv3 License', 'GNU LGPLv3 License', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'Open Source License']
  },
  {
    type: 'input',
    name: 'username',
    message: 'Please enter your Github username:',
    default: ''
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email address:',
    default: 'user@email.com'
  }
]

inquirer.prompt(questions).then((answers) => {
  fs.writeFile('./dist/README.md', `
  # ${answers.title}
  \n
  \n${answers.description}
  \n
  \n## Table of Contents
  \n1. [Installation](#installation)
  \n2. [Usage Guide](#usage)
  \n3. [Contribution Guidelines](#contribution)
  \n4. [Testing](#testing)
  \n5. [License](#license)
  \n6. [Questions](#questions)
  \n
  \n## Installation
  \n${answers.install}
  \n
  \n## Usage Guide
  \n${answers.usage}
  \n
  \n## Contribution Guidelines
  \n${answers.contribution}
  \n
  \n## Testing Information
  \n${answers.test}
  \n
  \n## License
  \nLicensed under the ${answers.license}
  \n
  \n## Questions
  \nThis project was created by https://github.com/${answers.username}
  \nIf you have any questions about the project, please email ${answers.email}.`,
  (err) => {
    if (err) return console.log(err);
  })
})
