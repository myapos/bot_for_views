import log from './log';
import isVideoPlaying from './isVideoPlaying';

const TIME_THRESHOLD = 30000;
const TIME_OFFSET = 30000;
const CHECK_EVERY = 1000;
const playAndMute = ({ window_, comments, video, counter }) => {
  let interval = {};
  let isPlaying;
  let initialTime = video.currentTime;
  isPlaying = isVideoPlaying(video);

  cy.get("[class*='ytp-play-button ytp-button']").should('exist');
  if (!isPlaying) {
    log('video was paused and will play');
    cy.get("[class*='ytp-play-button ytp-button']").click();
  }

  cy.get("[class*='ytp-mute-button ytp-button']").should('exist');

  if (!video.muted) {
    cy.get("[class*='ytp-mute-button ytp-button']").click();
    log('video is not muted');
  } else {
    log('video is muted');
  }

  log(`initialTime ${initialTime}`);

  if (comments) {
    cy.contains('Sort by').should('exist');
  } else {
    cy.contains('Comments are turned off.').should('exist');
  }

  cy.scrollTo(0, 0);

  interval[counter] = setInterval(() => {
    // it will leave the page after TIME_THRESHOLD of video are passed

    log(`interval ${interval[counter]}  current time ${video.currentTime}`);

    if (
      video.currentTime - initialTime >
      (TIME_THRESHOLD + TIME_OFFSET) / 1000
    ) {
      log('navigating to google');

      clearInterval(interval[counter]);
      window_.location.href = 'https://www.google.com'; //Will take you to Google.
    }
  }, CHECK_EVERY);
};

export default playAndMute;
