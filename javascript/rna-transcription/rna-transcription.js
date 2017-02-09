const DnaTranscriber = function() {
  this.legend = {
    G: `C`,
    C: `G`,
    T: `A`,
    A: `U`
  };
};

DnaTranscriber.prototype.toRna = function(dna) {
  if (dna.length !== 12 && dna.length !== 1) {
    throw new Error('Invalid input');
  }

  const legend = this.legend;
  const rna = dna.split('');

  for (var i = 0; i < dna.length; i++) {
    if (dna[i].match(/[gcta]/i)) {
      rna[i] = legend[dna[i]];
    } else {
      throw new Error('Invalid input');
    }
  }
  return rna.join('');
};

module.exports = DnaTranscriber;
