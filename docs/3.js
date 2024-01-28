/**
 * @generator
 * @param {number} limit - Maximum odd number to return, inclusive
 * @yields {number}
 */
function* oddsUpToN(limit) {

  if (limit > 0) {
    for (let odd = 1; odd <= limit; odd += 2) {
      yield odd;
    }
  }

  else { // limit <= 0
    for (let odd = 1; odd >= limit; odd -= 2) {
      yield odd;
    }
  }

}


/**
 * @param {number} limit - Maximum odd number to return, inclusive
 * @returns {Array<number>}
 */
function getOddsArray(limit) {
  return Array.from(oddsUpToN(limit));
}


console.log(getOddsArray(9));  // [1, 3, 5, 7, 9]
