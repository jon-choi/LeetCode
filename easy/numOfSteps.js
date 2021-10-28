const numberOfSteps = function (num) {
  let steps = 0;

  while (num > 0) {
    num % 2 ? num-- : (num = num / 2);
    steps++;
  }
  return steps;
};
console.log(numberOfSteps(10));
