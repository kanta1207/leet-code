// ** https://leetcode.com/problems/sum-of-two-integers/ **//

// Given two integers a and b, return the sum of the two integers without using the operators + and -.

function getSum(a: number, b: number): number {
  while (b != 0) {
    let carry = a & b;
    a = a ^ b;
    b = carry << 1;
  }

  return a;
}
