let array = [5, 1, 22, 25, 6, -1, 8, 10];
let sequence = [1, 6, -1, -1, 10];

function isValidSubsequence(array, sequence) {
  // Write your code here.

  let index = 0;

  for (let i = 0; i < array.length; i++) {
    if (sequence[index] === array[i]) {
      index++;
      console.log(index);
    }
  }

  return sequence.length === index;
}

console.log(isValidSubsequence(array, sequence));
