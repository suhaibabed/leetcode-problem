// Given an array a, your task is to apply the following mutation to it:

// Array a mutates into a new array b of the same length
// For each i from 0 to a.length - 1 inclusive, b[i] = a[i - 1] + a[i] + a[i + 1]
// If some element in the sum a[i - 1] + a[i] + a[i + 1] does not exist, it is considered to be 0
// For example, b[0] equals 0 + a[0] + a[1]
// Example

// For a = [4, 0, 1, -2, 3], the output should be solution(a) = [4, 5, -1, 2, 1].

// Explanation:

// b[0] = 0 + a[0] + a[1] = 0 + 4 + 0 = 4
// b[1] = a[0] + a[1] + a[2] = 4 + 0 + 1 = 5
// b[2] = a[1] + a[2] + a[3] = 0 + 1 + (-2) = -1
// b[3] = a[2] + a[3] + a[4] = 1 + (-2) + 3 = 2
// b[4] = a[3] + a[4] + 0 = (-2) + 3 + 0 = 1
// So, the mutated answer array is [4, 5, -1, 2, 1].

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer a

// An array of integers that needs to be mutated.

// Guaranteed constraints:
// 1 ≤ a.length ≤ 1000,
// -103 ≤ a[i] ≤ 103.

// [output] array.integer

// The resulting array after the mutation.

function solution(a) {
  let b = [];

  let n = a.length;

  for (let i = 0; i <= n - 1; i++) {
    if (i == 0) {
      b[0] = a[0] + a[1];
    } else if (i == n - 1) {
      // <- here
      b[i] = a[i - 1] + a[i];
    } else {
      b[i] = a[i - 1] + a[i] + a[i + 1];
    }
  }
  return b;
}

// Let's say a triple (a, b, c) is a zigzag if either a < b > c or a > b < c.

// Given an array of integers numbers, your task is to check all the triples of its consecutive elements for being a zigzag. More formally, your task is to construct an array of length numbers.length - 2, where the ith element of the output array equals 1 if the triple (numbers[i], numbers[i + 1], numbers[i + 2]) is a zigzag, and 0 otherwise.

// Example

// For numbers = [1, 2, 1, 3, 4], the output should be solution(numbers) = [1, 1, 0].

// (numbers[0], numbers[1], numbers[2]) = (1, 2, 1) is a zigzag, because 1 < 2 > 1;
// (numbers[1], numbers[2] , numbers[3]) = (2, 1, 3) is a zigzag, because 2 > 1 < 3;
// (numbers[2], numbers[3] , numbers[4]) = (1, 3, 4) is not a zigzag, because 1 < 3 < 4;
// For numbers = [1, 2, 3, 4], the output should be solution(numbers) = [0, 0];

// Since all the elements of numbers are increasing, there are no zigzags.

// For numbers = [1000000000, 1000000000, 1000000000], the output should be solution(numbers) = [0].

// Since all the elements of numbers are the same, there are no zigzags.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer numbers

// An array of integers.

// Guaranteed constraints:
// 3 ≤ numbers.length ≤ 100,
// 1 ≤ numbers[i] ≤ 109.

// [output] array.integer

// Return an array, where the ith element equals 1 if the triple (numbers[i], numbers[i + 1], numbers[i + 2]) is a zigzag, and 0 otherwise.

/************************************************************************************************************************* */
/*
You are given two arrays of integers a and b of the same length, and an integer k. We will be iterating through array a from left to right, and simultaneously through array b from right to left, and looking at pairs (x, y), where x is from a and y is from b. Such a pair is called tiny if the concatenation xy is strictly less than k.

Your task is to return the number of tiny pairs that you'll encounter during the simultaneous iteration through a and b.

Example

For a = [1, 2, 3], b = [1, 2, 3], and k = 31, the output should be
solution(a, b, k) = 2.

We're considering the following pairs during iteration:

(1, 3). Their concatenation equals 13, which is less than 31, so the pair is tiny;
(2, 2). Their concatenation equals 22, which is less than 31, so the pair is tiny;
(3, 1). Their concatenation equals 31, which is not less than 31, so the pair is not tiny.
As you can see, there are 2 tiny pairs during the iteration, so the answer is 2.

For a = [16, 1, 4, 2, 14], b = [7, 11, 2, 0, 15], and k = 743, the output should be
solution(a, b, k) = 4.

We're considering the following pairs during iteration:

(16, 15). Their concatenation equals 1615, which is greater than 743, so the pair is not tiny;
(1, 0). Their concatenation equals 10, which is less than 743, so the pair is tiny;
(4, 2). Their concatenation equals 42, which is less than 743, so the pair is tiny.
(2, 11). Their concatenation equals 211, which is less than 743, so the pair is tiny;
(14, 7). Their concatenation equals 147, which is less than 743, so the pair is tiny.
There are 4 tiny pairs during the iteration, so the answer is 4.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer a

An array of non-negative integers.

Guaranteed constraints:
0 ≤ a.length ≤ 105,
0 ≤ a[i] ≤ 104.

[input] array.integer b

An array of non-negative integers.

Guaranteed constraints:
b.length = a.length,
0 ≤ b[i] ≤ 104.

[input] integer k

An integer to compare concatenated pairs with.

Guaranteed constraints:
0 ≤ k ≤ 109.

[output] integer

The number of tiny pairs during the iteration.
*/
