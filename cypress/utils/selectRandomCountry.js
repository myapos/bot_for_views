import getRandomInt from './getRandomInt';
import log from './log';

const RAND_THRESHOLD = 5;

const COUNTRIES = {
  0: 'Montreal',
  1: 'Paris',
  2: 'Chicago',
  3: 'Los Angeles',
  4: 'Seattle',
  5: 'London',
};

const selectRandomCountry = () => {
  try {
    const randInt = getRandomInt(5);

    log(`Random country logs: randInt: ${randInt}`);
    log(`Country selected: ${COUNTRIES[randInt]}`);

    return COUNTRIES[randInt];
  } catch (e) {
    console.log('error', e);
  }
};

export default selectRandomCountry;
