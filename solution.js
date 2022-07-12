// 1
let i = 1;
while (i < 15) {
  console.log(i);
  i++;
}
console.log(i);

// 2
const numArr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
let length = numArr.length - 1;
let sum = 0;
while (length >= 0) {
  sum += numArr[length--];
}
console.log(sum);

// 3
let statement = "";
let j = 0;
do {
  j++;
  statement += "The number is " + [j];
} while (j < 20);
console.log(statement);
