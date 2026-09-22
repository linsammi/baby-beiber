// Splits a line into lowercase words so punctuation does not affect the search.
const getWords = (line: string): string[] => (
  line.toLowerCase().split(/[^a-z]+/).filter(word => word.length > 0)
);

// Checks whether any line contains "mine" as a whole word.
const hasMine = (lines: string[]): boolean => (
  lines.some(line => getWords(line).includes('mine'))
);

// Counts every occurrence of "mine" as a whole word.
const numMines = (lines: string[]): number => (
  lines
    .map(line => getWords(line).filter(word => word === 'mine').length)
    .reduce((total, count) => total + count, 0)
);

// Test the complete lyrics and a section without "mine".
console.log(hasMine(bieberBaby)); // true
console.log(hasMine(bieberBaby.slice(0, 4))); // false

// Test whole-word matching.
console.log(hasMine(['That is mine!'])); // true
console.log(hasMine(['MINE'])); // true
console.log(hasMine(['miner'])); // false
console.log(hasMine(['mines'])); // false
console.log(hasMine(['mine_bieber'])); // true

// Test counting "mine".
console.log(numMines(bieberBaby)); // 12
console.log(numMines(['mine', 'Mine!', 'miner'])); // 2
console.log(numMines(['mine mine mine'])); // 3
console.log(numMines(['miner', 'mines'])); // 0
console.log(numMines(['mine_bieber'])); // 1
