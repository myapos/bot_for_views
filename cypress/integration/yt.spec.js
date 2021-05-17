import * as utils from "../utils";
describe('Navigation', () => {
    beforeEach(() => {
      utils.setUIViewport();
      Cypress.config({
        defaultCommandTimeout: 30000,
      });
      cy.visit('https://accounts.google.com/signin/v2/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin')
    })
  
    it('should visit yt video', () => {
      utils.loginGmail();
      // cy.contains('I agree').should('exist')
    })

  })
  