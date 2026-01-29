let num = 81;
let sum = null;
while (num <= 131) {
  if (num % 2 != 0) {
    sum += num;
  }
  num++;
}
console.log(sum);
