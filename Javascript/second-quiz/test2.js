function ladderLength(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList); // faster lookup

  if (!wordSet.has(endWord)) return 0; // no path if endWord not in list

  let queue = [[beginWord, 1]]; // each item: [word, stepCount]

  while (queue.length > 0) {
    const [word, steps] = queue.shift();

    // try changing every character in the word
    for (let i = 0; i < word.length; i++) {
      for (let c = 97; c <= 122; c++) { // 'a' to 'z'
        const char = String.fromCharCode(c);
        if (char === word[i]) continue;

        const newWord = word.slice(0, i) + char + word.slice(i + 1);

        if (newWord === endWord) {
          return steps + 1;
        }

        if (wordSet.has(newWord)) {
          queue.push([newWord, steps + 1]);
          wordSet.delete(newWord); // prevent revisiting
        }
      }
    }
  }

  return 0; // no transformation found
}

console.log(
  ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
); // Output: 5

