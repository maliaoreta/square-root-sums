var squareRootSums = function (num) {

  var sum = 0;
  var numToSquare = 1;

  while (numToSquare <= num) {

    sum += Math.sqrt(numToSquare);
    numToSquare += 1;
  };

  return sum;
};