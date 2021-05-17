import * as utils from '../utils';
describe('Youtube', () => {
  let window_, video, interval;

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
    });

    cy.on('window:load', (win) => {
      video = window_.document.getElementsByClassName(
        'video-stream html5-main-video'
      )[0];
      console.log('------------->>>>> video', video);
      cy.task('log', '------------->>>>> video', video);
      // video.muted = true;
    });
  });

  it('should visit yt video', () => {
    interval = setInterval(() => {
      console.log('waiting for video', video);
      if (video) {
        console.log('clearing interval');
        clearInterval(interval);
        utils.playAndMute({ window_, comments: false, video });
      }
    }, 1000);
  });
});
