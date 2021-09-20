import * as utils from '../utils';
import * as constants from '../constants';

describe.only('Scan Facebook Profiles', () => {
  let counter = 0;
  let maxRequestPerHour = 200;
  let requestsRatio = 100; // requests per hour
  let waitPerRequest = 100; // ms
  let baseNumber;
  let remainingNumber;
  let countStep = 1;
  let testfbId;

  const STRATEGY = 1; // increase number for searching
  const BASE_STRATEGY = 8; // get num of digits of baseNumber
  const wholeSecondPart = '760959737407802'; //'10214187263809934';

  // working
  // const wholeSecondPart = '10214187263809933';

  // 37941749_10214187263849934_1183138094182825984_n.jpg
  const BASE_NUMBER_STR = wholeSecondPart.substring(0, BASE_STRATEGY);
  const REMAINING_NUMBER_STR = wholeSecondPart.substring(
    BASE_STRATEGY,
    wholeSecondPart.length
  );
  baseNumber = parseInt(BASE_NUMBER_STR);

  remainingNumber = parseInt(REMAINING_NUMBER_STR);
  console.log('baseNumber', baseNumber, ' remainingNumber', remainingNumber);
  testfbId = baseNumber;

  beforeEach(() => {
    cy.clearLocalStorage();
    cy.clearCookies(); // clear all cookies
    Cypress.config({
      defaultCommandTimeout: 60000,
    });
  });

  it('should be true', () => {
    expect(true).to.be.true;
  });

  let i = 0;
  let minimizedRuns = 4;
  let maxChecks = 5;
  let testSuccess = false;
  const stepCheck = 10000;

  let start = remainingNumber;
  for (let index = start; index > start - stepCheck; index--) {
    it(`Test run - ${index} should run every ${waitPerRequest} ms`, () => {
      // autis
      // 39907569_760959737407902_4195277110740254720_n
      // dikia mou
      // 39907569_760959737407902_4195277110740254720_n

      // douleuei
      //   cy.visit('https://www.facebook.com/photo/?fbid=10214187263809933');

      console.log('remainingNumber', remainingNumber);
      testfbId = `${baseNumber}${index}`;

      console.log('testfbId', testfbId);
      cy.log(`Testing ${testfbId}`);
      cy.visit(
        // `https://www.facebook.com/photo/?fbid=${testfbId}${remainingNumber}`,
        `https://www.facebook.com/photo/?fbid=${testfbId}`
        // `https://www.facebook.com/photo/?fbid=10214187263809934`
      )
        .contains('Αποδοχή όλων')
        .click()
        .window()
        .then(($win) => {
          const spansNodes = $win.document.querySelectorAll('span');

          var spans = Array.prototype.slice.call(spansNodes);
          const found = spans.some((span) =>
            span.textContent.includes('Μου αρέσει!')
          );

          if (found) {
            cy.log('Found', found);

            Cypress.runner.stop();
          }
        });
    });

    //  not working testing
    //  cy.visit('https://www.facebook.com/photo/?fbid=760959737407902');

    // cy.contains('Μου αρέσει').should('exist');
    //   testfbId = testfbId + STRATEGY;

    remainingNumber = remainingNumber - STRATEGY;
  }
});
