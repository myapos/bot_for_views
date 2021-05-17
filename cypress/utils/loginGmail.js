import { CREDENTIALS } from '../config';

const loginGmail = () => {
    try {
        cy.get("[type*='email']").should('exist');
        cy.get("[type*='email']").type(CREDENTIALS.username);
        
        cy.contains('Επόμενο').click();

        // progressbar
        cy.get("[role*='progressbar']").should('not.be.visible')
        cy.get("[type*='password']").type(CREDENTIALS.password);
        cy.contains('Επόμενο').click();

        cy.wait(3000)
        // cy.get("[role*='progressbar']").should('not.be.visible')
    } catch(e) {
        console.log('error',e)
    }  
};
  
  export default loginGmail;
  