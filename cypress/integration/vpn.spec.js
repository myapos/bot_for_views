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
    cy.window().then((win) => {
      // win.location.href = 'https://www.youtube.com/watch?v=UiRjz7rz978'; // krifes
      win.location.href = 'https://freevpn.one/'; // nauagos
      window_ = win;
    });
    cy.on('window:load', (win) => {
      //   video = window_.document.getElementsByClassName(
      //     'video-stream html5-main-video'
      //   )[0];
      //   utils.log('------------->>>>> video', video);
    });
  });

  const RANDOM_OFFSET = constants.generateRandomOffset();

  Cypress._.times(constants.LOOPS, () => {
    counter = counter + 1;
    const RANDOM_OFFSET = constants.generateRandomOffset();
    it(`should use free vpn`, () => {
      const country = utils.selectRandomCountry();

      cy.contains(`${country}`).should('exist');
      cy.contains(`${country}`)
        .click()
        .then((l) => {
          debugger;

          // load video
          window_.location.href = 'https://www.youtube.com/watch?v=VBhOKdiwmN0'; // nauagos
        })
        .then((l) => {
          video = window_.document.getElementsByClassName(
            'video-stream html5-main-video'
          )[0];
        })
        .then((l) => {
          let isPlaying = false;
          cy.wrap({ video: () => video }).should('exist');
          utils.log(`muted: ${video.muted}`);

          isPlaying = utils.isVideoPlaying(video);
          utils.log(`is playing ${isPlaying}`);
          video.muted = true;
          utils.playAndMute({ window_, comments: false, video, counter });

          // video duration should be at least greater than 30 secs
          utils.log(`waiting for time to elapse ${video.currentTime}`);

          utils.decreaseQuality();

          utils.randomStops();

          cy.wrap({ currentTime: () => video.currentTime })
            .invoke('currentTime')
            .should('be.gt', constants.TIME_THRESHOLD + RANDOM_OFFSET);
        });
    });
  });
});
