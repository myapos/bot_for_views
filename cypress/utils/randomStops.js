import getRandomInt from './getRandomInt';
import log from './log';

const RAND_THRESHOLD = 5;

const randomStops = () => {
  try {
    const randInt = getRandomInt(10);

    log(`Random stop logs: randInt: ${randInt}`);

    if (randInt > RAND_THRESHOLD) {
      log('will pause the video');
      // pause video with click

      cy.get("[class*='ytp-play-button ytp-button']").should('exist');
      cy.get("[class*='ytp-play-button ytp-button']").click();
      cy.wait(2000);
      // wait for 500
      // play again
      log('will play the video again');

      cy.get("[class*='ytp-play-button ytp-button']").should('exist');
      cy.get("[class*='ytp-play-button ytp-button']").click();

      cy.scrollTo('top', { easing: 'linear' });
    }
  } catch (e) {
    console.log('error', e);
  }
};

export default randomStops;
