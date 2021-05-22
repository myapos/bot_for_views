import * as utils from '../utils';
import * as constants from '../constants';

describe('VPN', () => {
  let window_,
    video,
    counter = 0;

  beforeEach(() => {
    cy.clearLocalStorage();
    cy.clearCookies(); // clear all cookies

    // cy.clearExtensionStorage('local');

    // video = null;
    utils.setUIViewport();
    Cypress.config({
      defaultCommandTimeout: 120000,
      pageLoadTimeout: 240000,
    });

    cy.visit('https://dotvpn.com/en/', {
      onBeforeLoad: (win) => {
        window_ = win;
        // contentWindow is the remote page's window object
      },
    });
  });

  it(`Should setup vpn`, () => {
    cy.contains('Sign In').should('exist');
    cy.contains('Sign In').click();
    utils.loginDotVpn();

    window_.location.href = 'https://www.google.com/';
    // cy.visit('https://www.google.com/');
  });
});
