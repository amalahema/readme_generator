

// Create a function that returns the license badge based on which license is passed in

function renderLicenseBadge(license) {
  if (!license) {
    return ``;
  } else {
    const licenseLink = renderLicenseLink(license);//get the url link of the license
    return `[![${license} License](https://img.shields.io/badge/license-${license.split(' ').join('%20')}-blue)](${licenseLink})
    `;
  }
  //[Click here](https://www.xxx.com)so when we click the badge it navigate to the license url
}


//  Create a function that returns the license link
function renderLicenseLink(license) {
  if(license === 'MIT'){
    return 'https://choosealicense.com/licenses/mit/' 
  }
  if(license === 'GPL'){
    return`https://opensource.org/licenses-old/gpl-license-html/`
  }
  if(license === 'CC--0'){
    return`https://creativecommons.org/choose/results-one?license_code=by-nd`
  }
}

// Create a function that returns the license section of README
function renderLicenseSection(license) {
  if (!license) {
    return ``;
  } else {
    return `
    This project is covered under the ${license} license. To learn more , click the license button at the top.
`
  }
}

//  Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.licenses)}

  
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Licenses](#licenses)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  
  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Licenses
  ${renderLicenseSection(data.licenses)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}
  
  ## Questions
  Any questions ? Reach out !
  GitHub: https://github.com/${data.github}  
  Email: ${data.email}

`;
}

module.exports = generateMarkdown;


/*switch case error - license badges file not found after install
function renderLicenseBadge(license) {
  let licenseBadge = getBadge(license);//license string what u passed 
  const licenseUrl = 'https://img.shields.io/badge/license-';

  switch (license) {
    case 'MIT':
      licenseBadge = `![${license} License](${licenseUrl}MIT-blue)(${renderLicenseLink(license)})`;
      break;
      case 'GPL':
      licenseBadge = `![${license} License](${licenseUrl}GPL-blue)(${renderLicenseLink(license)})`;
      break;
      case 'CC--0':
      licenseBadge = `![${license} License](${licenseUrl}CC--0-blue)${renderLicenseLink(license)}`;
      break;
      default:
      licenseBadge = `![License](${licenseUrl}unknown-blue)`;
      break;
  }

  return licenseBadge;
}*/
