let tableau1 = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

let i = 0;

do {
  if (tableau1[i] < 0) {
    tableau1.splice(i, i);
  }
  i++;
} while (i < tableau1.length);

console.log("tableau 1 : " + tableau1);
