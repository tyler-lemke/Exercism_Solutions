//
// This is only a SKELETON file for the 'Scrabble Score' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// O(n) Time Complexity

const LOOKUP_TABLE = {
  a: 1,
  e: 1,
  i: 1,
  o: 1,
  u: 1,
  l: 1,
  n: 1,
  r: 1,
  s: 1,
  t: 1,
  d: 2,
  g: 2,
  b: 3,
  c: 3,
  m: 3,
  p: 3,
  f: 4,
  h: 4,
  v: 4,
  w: 4,
  y: 4,
  k: 5,
  j: 8,
  x: 8,
  q: 10,
  z: 10
}
export const score = (word) => {
  //for each char
     // add to total value based on lookup
  //lookupTable
  word = word.toLowerCase();
  let total = 0;
  for(let char of word){
    total += LOOKUP_TABLE[char];
  }
  return total;
};
