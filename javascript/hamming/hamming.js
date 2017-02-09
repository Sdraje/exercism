const Hamming = function() {};

Hamming.prototype.compute = function(strandOne, strandTwo) {
  if (strandOne.length === strandTwo.length) {
    let counter = 0;
    for (var i = 0; i < strandOne.length; i++) {
      if (strandOne[i] !== strandTwo[i]) {
        counter++;
      }
    }
    return counter;
  } else {
    throw new Error('DNA strands must be of equal length.');
  }
};

module.exports = Hamming;
