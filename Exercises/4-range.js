'use strict';

// Implement function `range(start: number, end: number): array` returning
// array with all numbers from the range [15, 30] including endpoints

const range = (start, end) => {
  if ((end - start) < 0) return[];
  const array = [];
  let i = 0;
  for (let n = start; n <= end; n++) {
    array[i++] = n;
  }
  return array;
};

module.exports = { range };
