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
  })
});
