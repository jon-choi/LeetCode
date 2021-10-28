const getDecimalValue = function (head) {
  let binaryArr = [];
  binaryArr.push(head.val);

  while (head.next) {
    head = head.next;
    binaryArr.push(head.val);
  }
  binaryArr.reverse();
  let ind = 0;
  let sum = 0;

  for (const num of binaryArr) {
    sum += num * Math.pow(2, ind);
    console.log(sum);
    ind++;
  }
  return sum;
};
console.log(getDecimalValue([1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0]));
