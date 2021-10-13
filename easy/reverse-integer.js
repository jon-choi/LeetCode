/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  // check if negative
  const negative = x < 0 && "-";

  // create array from number
  const array = Array.from(x.toString()).map(Number);

  // reverse array and parse into an integer
  const num = parseInt(array.reverse().join(""));

  // if greater than the max 32bit integer return 0
  if (num > 2147483647) return 0;

  return parseInt(negative + num);
};
