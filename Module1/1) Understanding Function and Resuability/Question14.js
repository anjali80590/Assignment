
function calculatePrice() {
  let price = prompt("enter the price");
  let discount = prompt("enter the discount");
  if (!discount) {
    discount = 10;
  } else {
    discount = parseFloat(discount);
  }
  if (isNaN(price) || price <= 0) {
    console.log("error");
    prompt("add correct price");
  }
  if (isNaN(discount) || discount < 0) {
    console.log("enter positive discount");
  }
  price = price * (1 - discount / 100);
  return price;
}
console.log(calculatePrice());
