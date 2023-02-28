// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} \n

       [TOC]

      ## Description 
    ${data.description}
  
    # Installation
    ${data.installation}
  
    ## Usage
    ${data.usage}
  
    ## License
    ${data.licence}
  
    ## Tests
    ${data.tests};
    `
  };

// module.exports = {
//   generateMarkdown: generateMarkdown
// };

export { generateMarkdown };