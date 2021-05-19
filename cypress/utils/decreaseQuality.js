// ytp-button ytp-settings-button

const decreaseQuality = () => {
  try {
    cy.get("[class*='ytp-button ytp-settings-button']").should('exist');
    cy.get("[class*='ytp-button ytp-settings-button']").click();

    cy.contains('Quality').should('exist');
    cy.contains('Quality').click();

    cy.contains('144p').should('exist');
    cy.contains('144p').click();

    cy.scrollTo('top', { easing: 'linear' });
  } catch (e) {
    console.log('error', e);
  }
};

export default decreaseQuality;
