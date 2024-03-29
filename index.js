
import inquirer from 'inquirer';
import fs from 'fs';

// Function to generate README content
function generateREADME(answers) {
  return `
# ${answers.title}

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For questions about this project, please contact [${answers.username}](https://github.com/${answers.username}) or reach out via email at ${answers.email}.
`;
}

// Function to prompt user for input
function promptUser() {
  return inquirer.prompt([
      {
          type: 'input',
          name: 'title',
          message: 'Enter your project title:'
      },
      {
          type: 'input',
          name: 'description',
          message: 'Enter a description:'
      },
      {
          type: 'input',
          name: 'installation',
          message: 'Enter installation instructions:'
      },
      {
          type: 'input',
          name: 'usage',
          message: 'Enter usage information:'
      },
      {
          type: 'list',
          name: 'license',
          message: 'Choose a license:',
          choices: ['MIT', 'Apache', 'GPL', 'ISC', 'Other']
      },
      {
          type: 'input',
          name: 'contributing',
          message: 'Enter contribution guidelines:'
      },
      {
          type: 'input',
          name: 'tests',
          message: 'Enter test instructions:'
      },
      {
          type: 'input',
          name: 'username',
          message: 'Enter your GitHub username:'
      },
      {
          type: 'input',
          name: 'email',
          message: 'Enter your email address:'
      }
  ]);
}

// Function to write README file
async function writeREADME(answers) {
  try {
      const readmeContent = generateREADME(answers);
      await fs.promises.writeFile('README.md', readmeContent);
      console.log('README.md file has been generated successfully.');
  } catch (error) {
      console.error('Error occurred while generating README:', error);
  }
}

// Main function
async function main() {
  try {
      const userInputs = await promptUser();
      await writeREADME(userInputs);
  } catch (error) {
      console.error('Error occurred:', error);
  }
}

// Call main function
main();