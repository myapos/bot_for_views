/// <reference types="cypress" />

context('Navigation', () => {
    beforeEach(() => {
      Cypress.config({
        defaultCommandTimeout: 30000,
      });
      cy.visit('https://consent.youtube.com/m?continue=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DUiRjz7rz978&gl=GR&m=0&pc=yt&uxe=23983172&hl=el&src=1')
      // cy.visit('https://www.youtube.com/watch?v=UiRjz7rz978')
    })
  
    it('should visit yt video', () => {

      cy.get('VfPpkd-vQzf8d').should("exist");
      // cy.get('VfPpkd-vQzf8d').click());
      //click()
     // ytp-play-button ytp-button
    //  cy.get("[class*='ytp-play-button ytp-button']").click();
     
     
     // ytp-mute-button ytp-button
    //  cy.get("[class*='ytp-mute-button ytp-button']").click();
    })

  })
  