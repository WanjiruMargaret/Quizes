function findingNumbers(arr) {
    const n = arr.length;
    const expectedSum = (n*(n+1))/2;
    const actualSum = arr.reduce((acc, num) => acc + num, 0);
    return expectedSum - actualSum;
}
console.log(findingNumbers([3,0,1])); // 4