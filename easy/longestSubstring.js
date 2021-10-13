/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let longest = 0;
  let start = 0;
  let seen = {};

  [...s].forEach((char, i) => {
    if (char in seen && start <= seen[char]) {
      longest = Math.max(i - start, longest);
      start = seen[char] + 1;
    }
    seen[char] = i;
  });
  return Math.max(s.length - start, longest);
};
