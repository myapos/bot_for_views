const log = (message) => {
  const { browser } = window.Cypress;
  if (browser.name === 'chrome' && browser.isHeaded) {
    console.log(message);
  } else {
    cy.log(message);
  }
};

export default log;
