import log from './log';
import isVideoPlaying from './isVideoPlaying';

const playAndMute = ({ window_, comments, video, counter }) => {
  let interval = {};
  let isPlaying;
  let initialTime = video.currentTime;
  isPlaying = isVideoPlaying(video);

  cy.get("[class*='ytp-play-button ytp-button']").should('exist');
  if (!isPlaying) {
    log('video was paused and will play');
    // cy.get("[class*='ytp-play-button ytp-button']").click();
    video.play();
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
};

export default playAndMute;
