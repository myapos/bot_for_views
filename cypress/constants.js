export const TIME_THRESHOLD = 40;
export const TIME_OFFSET = 10;
export const LOOPS = 200;

import getRandomInt from './utils/getRandomInt';

export const generateRandomOffset = (max = 20) => {
  return getRandomInt(max);
};
