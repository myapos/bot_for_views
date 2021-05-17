const TIME_THRESHOLD = 30000;
const TIME_OFFSET = 30000;
const CHECK_EVERY = 1000;

const playAndMute = ({ window_, comments, video }) => {
  let interval;
  let initialTime = video.currentTime;

  cy.get("[class*='ytp-play-button ytp-button']").should('exist');
  cy.get("[class*='ytp-play-button ytp-button']").click();
  cy.get("[class*='ytp-play-button ytp-button']").click();

  cy.get("[class*='ytp-mute-button ytp-button']").should('exist');

  if (!video.muted) {
    cy.get("[class*='ytp-mute-button ytp-button']").click();
  }

  console.log('video is muted', video.muted, ' initialTime', initialTime);

  if (comments) {
    cy.contains('Sort by').should('exist');
  } else {
    cy.contains('Comments are turned off.').should('exist');
  }

  cy.scrollTo(0, 0);

  interval = setInterval(() => {
    // it will leave the page after TIME_THRESHOLD of video are passed

    console.log('interval', interval, ' current time', video.currentTime);

    if (
      video.currentTime - initialTime >
      (TIME_THRESHOLD + TIME_OFFSET) / 1000
    ) {
      clearInterval(interval);
      window_.location.href = 'https://www.google.com'; //Will take you to Google.
    }
  }, CHECK_EVERY);
};

export default playAndMute;
