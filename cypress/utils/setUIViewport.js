const setUIViewport = () => {
  cy.viewport(1900, 1024);
  // runs once before all tests in the block
};

export default setUIViewport;
