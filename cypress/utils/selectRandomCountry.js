import getRandomInt from './getRandomInt';
import log from './log';

const RAND_THRESHOLD = 5;

const COUNTRIES = {
  1: 'Montreal',
  2: 'Paris',
  3: 'Chicago',
  4: 'Los Angeles',
  5: 'Seattle',
  6: 'London',
};

const selectRandomCountry = () => {
  try {
    const randInt = getRandomInt(6);

    log(`Random country logs: randInt: ${randInt}`);
    log(`Country selected: ${COUNTRIES[randInt]}`);

    return COUNTRIES[randInt];
  } catch (e) {
    console.log('error', e);
  }
};

export default selectRandomCountry;
