describe('squareRootSums', function () {

  it('should be a function', function () {

    expect(squareRootSums).to.be.a('function');
  });

  it('should return a number', function () {

    expect(squareRootSums(4)).to.be.a('number');
  });

  it('should return the sum of the square roots of 1 to the given number', function () {

    expect(squareRootSums(4)).to.equal(30);
  })
});
