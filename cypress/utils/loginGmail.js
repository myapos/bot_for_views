import { CREDENTIALS } from '../config';

const loginGmail = () => {
    try {
        cy.get("[type*='email']").should('exist');
        cy.get("[type*='email']").type(CREDENTIALS.username);
        // 6sURbem5EW4Nyh6p5THJ
        
        // cy.contains('Επόμενο').click();
    
        // cy.wait(500);
        // cy.get("[type*='password']").should('exist');
        // cy.get("[type*='password']").type(CREDENTIALS.password);
        // cy.get("[type*='password']").then(l => {
        //     debugger;
        // })
        // cy.get("[type*='password']").type('test');
        // cy.contains('Επόμενο').click();
        // .click();
    } catch(e) {
        console.log('error',e)
    }  
};
  
  export default loginGmail;
  