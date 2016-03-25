describe('squareRootSums', function () {

  it('should be a function', function () {

    expect(squareRootSums).to.be.a('function');
  });

  it('should return a number', function () {

    expect(squareRootSums()).to.be.a('number');
  });

  it('should return the sum of the square roots of 1 to the given number', function () {

    var test4 = squareRootSums(4);
    expect(test4).to.equal(6.1462643699419723);
    var test10 = squareRootSums(10);
    expect(test10).to.equal(22.4682781862041002);
    var test25 = squareRootSums(25);
    expect(test25).to.equal(85.63378027507814);
  })
});
