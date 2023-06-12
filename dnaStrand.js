// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all

function DNAStrand(dna) {
  const hash = { A: 'T', T: 'A', G: 'C', C: 'G' };
  let result = '';

  for (let i = 0; i < dna.length; i++) {
    result += hash[dna[i]];
  }

  return result;
}
