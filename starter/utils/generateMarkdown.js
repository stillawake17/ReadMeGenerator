// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} \n

  * 1. [Description](##Description)
* 2. [Installation](#Installation)
* 3. [Usage](#Usage)
* 4. [Configuration](#Configuration)
* 5. [License](#License)
* 6. [Tests](#Tests)
* 7. [Questions](##Questions)

    ## Description 
    ${data.description}
  
    ## Installation
    ${data.installation}
  
    ## Usage
    ${data.usage}
    ![video](./assets/video.mp4)
  
    ## License
    ${data.license}
  
    ## Tests
    ${data.tests};

    ## Questions
    Contact the developer with any questions at <${data.email}>;
    `

    if (data.license == 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } else {
if (data.licence == 'Mozilla') {
  return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
} else {
if (data.licence == 'Creative') {
  return `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`
}

}    }
if (data.usage == 'nnpm') {
  return `https://img.shields.io/npm/v/npm.svg?logo=nodedotjs`

} else {
  if (data.usage == 'javascript') {
    return `https://img.shields.io/badge/logo-javascript-blue?logo=javascript`
  
  }
}
    }

  ;
 

// module.exports = {
//   generateMarkdown: generateMarkdown
// };

export { generateMarkdown };