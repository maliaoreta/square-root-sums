describe('squareRootSums', function () {

  it('should be a function', function () {

    expect(squareRootSums).to.be.a('function');
  });

  it('should take a single input of type Number and return the sum of the square root of every number from 1 to the givn number', function () {

    expect(squareRootSums(4)).to.be.a('number');
  })
});
