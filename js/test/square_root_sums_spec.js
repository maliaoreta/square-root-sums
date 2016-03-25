describe('squareRootSums', function () {

  it('should be a function', function () {

    expect(squareRootSums).to.be.a('function');
  });

  it('should return a number', function () {

    expect(squareRootSums()).to.be.a('number');
  });

  it('should return the sum of the square roots of 1 to the given number', function () {

    var test4 = squareRootSums(4);
    expect(test4).to.equal(30);
    var test10 = squareRootSums(10);
    expect(test10).to.equal(385);
    var test16 = squareRootSums(16);
    expect(test16).to.equal(1496);
  })
});
