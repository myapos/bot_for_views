import * as utils from '../utils';
describe('Youtube', () => {
  let window_,
    video,
    interval = {},
    counter = 0,
    testCounter = 0;

  beforeEach(() => {
    utils.setUIViewport();
    Cypress.config({
      defaultCommandTimeout: 120000,
    });
    cy.window().then((win) => {
      // win.location.href = 'https://www.youtube.com/watch?v=UiRjz7rz978'; // krifes
      win.location.href = 'https://www.youtube.com/watch?v=PLhr5BLPJaw'; // sousta
      window_ = win;
    });
    cy.on('window:load', (win) => {
      video = window_.document.getElementsByClassName(
        'video-stream html5-main-video'
      )[0];
      utils.log('------------->>>>> video', video);
    });
  });

  it('should visit yt video 1 time', () => {
    interval[counter] = setInterval(() => {
      let isPlaying = false;
      utils.log(`waiting for video ${video}`);
      if (video) {
        utils.log('clearing interval');
        utils.log(`muted: ${video.muted}`);
        isPlaying = utils.isVideoPlaying(video);
        utils.log(`is playing ${isPlaying}`);
        video.muted = true;
        clearInterval(interval[counter]);
        utils.playAndMute({ window_, comments: false, video, counter });
      }
    }, 1000);
  });

  // it('should visit yt video 2 time', () => {
  //   interval[counter] = setInterval(() => {
  //     let isPlaying = false;
  //     utils.log(`waiting for video ${video}`);
  //     if (video) {
  //       utils.log('clearing interval');
  //       utils.log(`muted: ${video.muted}`);
  //       isPlaying = utils.isVideoPlaying(video);
  //       utils.log(`is playing ${isPlaying}`);
  //       video.muted = true;
  //       clearInterval(interval[counter]);
  //       utils.playAndMute({ window_, comments: false, video, counter });
  //     }
  //   }, 1000);
  // });
});
