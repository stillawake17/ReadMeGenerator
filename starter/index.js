import fs from "fs";
import path from 'path';
import inquirer from 'inquirer';
import * as markdownGenerator from "./utils/generateMarkdown.js";
console.log(markdownGenerator);

 
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Describe your project?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How do you install your project?',
    },
    {
      type: 'checkbox',
      message: 'What code have you used for this project?',
      name: 'usage',
      choices: ['CSS', 'JavaScript', 'MySQL'],
    },
    {
      type: 'list',
      message: 'What licence are you using?',
      name: 'licence',
      choices: ['MIT', 'other1', 'telekinesis'],
    },
    {
      type: 'input',
      name: 'tests',
      message: 'How do you test your project?',
    },
   
  ])
  .then((data) => {
    console.log("The title of your project is ", data.title);
    const filename = "readme.md";
    const markdown = markdownGenerator.generateMarkdown(data);
    fs.writeFile(filename, markdown, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
