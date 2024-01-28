/**
 * @param {number} addend1
 * @param {number} addend2
 * @param {number} multiplier
 * @returns {number}
 */
function calcSin(addend1, addend2, multiplier) {
  let sum = addend1 + addend2;
  let subtotal = sum * multiplier;
  let result = Math.sin(subtotal);
  return result;
}
