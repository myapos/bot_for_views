import { DOTVPN } from '../config';

const loginGmail = () => {
  try {
    cy.get("[type*='email']").should('exist');
    cy.get("[type*='email']").type(DOTVPN.username);

    cy.get("[type*='password']").should('exist');
    cy.get("[type*='password']").type(DOTVPN.password);
    cy.get("[type*='submit']").click();

    cy.contains('Welcome to your DotVPN account');
  } catch (e) {
    console.log('error', e);
  }
};

export default loginGmail;
