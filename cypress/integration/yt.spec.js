import * as utils from '../utils';
describe('Youtube', () => {
  let window_;

  beforeEach(() => {
    utils.setUIViewport();
    Cypress.config({
      defaultCommandTimeout: 30000,
    });
    cy.window().then((win) => {
      // win.open('https://www.youtube.com/');
      // win.location.href = 'https://www.youtube.com/'; //Will take you to Google.
      // win.location.href = 'https://www.youtube.com/watch?v=UiRjz7rz978'; //Will take you to Google.
      win.location.href = 'https://www.youtube.com/watch?v=PLhr5BLPJaw'; //Will take you to Google.

      window_ = win;
      //https://www.youtube.com/watch?v=UiRjz7rz978
      // win.location.href='https://accounts.google.com/signin'
    });
  });

  it('should visit yt video', () => {
    utils.playAndMute({ window_, comments: false });
  });
});
