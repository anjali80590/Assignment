function multiplyNumbers(a, b) {
  return multiply.apply(null, [a, b]);
}

function multiply(x, y) {
  return x * y;
}

console.log(multiplyNumbers(5, 3));
