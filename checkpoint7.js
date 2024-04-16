function numeros(num1, num2, num3, num4) {

  var sum1 = num1 + num2;
  var sum2 = num3 + num4;
  var multi = sum1 * sum2;

  if (multi > 50) {
    console.log(multi + "¡El número es mayor que 50!")
  } else {
    console.log(multi + "¡El número es menor que 50!")
  }
}
numeros(4, 5, 3, 1);

   