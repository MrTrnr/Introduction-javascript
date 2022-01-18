let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
for (let i = 0; i < array.length; i++) {
  if (array[i] > 3) {
    console.log("Entier supérieur à 3 : " + array[i]);
  }
}

for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 == 0) {
    console.log("Entier pair : " + array[i]);
  }
}

for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 != 0) {
    console.log("Entier impair : " + array[i]);
  }
}
