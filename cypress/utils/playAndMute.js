const TIME_THRESHOLD = 30000;
const TIME_OFFSET = 30000;
const CHECK_EVERY = 1000;

const playAndMute = ({ window_, comments }) => {
  let interval;
  cy.get("[class*='ytp-play-button ytp-button']").should('exist');
  cy.get("[class*='ytp-play-button ytp-button']").click();
  cy.get("[class*='ytp-play-button ytp-button']").click();

  cy.get("[class*='ytp-mute-button ytp-button']").should('exist');
  cy.get("[class*='ytp-mute-button ytp-button']").click();

  let video_ = window_.document.getElementsByClassName(
    'video-stream html5-main-video'
  )[0];

  video_.muted = true;
  if (comments) {
    cy.contains('Sort by').should('exist');
  } else {
    cy.contains('Comments are turned off.').should('exist');
  }

  cy.scrollTo(0, 0);

  interval = setInterval(() => {
    // it will leave the page after TIME_THRESHOLD of video are passed

    console.log('interval', interval, ' current time', video_.currentTime);

    if (video_.currentTime > (TIME_THRESHOLD + TIME_OFFSET) / 1000) {
      clearInterval(interval);
      window_.location.href = 'https://www.google.com'; //Will take you to Google.
    }
  }, CHECK_EVERY);
  //   setTimeout(() => {
  //     console.log(`${TIME_THRESHOLD} secs passed. I will leave the page`);
  //     // leave page
  //     window_.location.href = 'https://www.google.com'; //Will take you to Google.
  //     // utils.loginGmail();
  //     // cy.contains('Αρχική σελίδα').should('exist');
  //   }, TIME_THRESHOLD);
};

export default playAndMute;
