const isHappy = function (n) {
  let ans = n;
  let seen = {};
  let loop = false;

  while (ans !== 1) {
    if (loop) {
      return false;
    }
    let numberStrArray = ans.toString().split("");
    ans = 0;
    numberStrArray.forEach((e) => {
      ans += e * e;
    });
    seen[ans] ? (loop = true) : (seen[ans] = 1);
  }
  return true;
};

console.log(isHappy(19));
