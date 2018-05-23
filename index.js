var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var Object = {
    itemName: itemName, itemPrice: Math.floor(Math.random() * 100)
  };
  cart.push(Object);
  return (`${itemName} has been added to your cart.`);
}







function viewCart() {
  for (let i = 0; i<3; i++) {
    if (getCart().length < 0) {
      return "Your shopping cart is empty.";
    }
    else if (i>=1) {
      return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`
    } else if (i>=2) {
      return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}, and ${getCart()[1].itemName} at $${getCart()[1].itemPrice}.`;
    }
  }
}











function total() {
  // write your code here
}

function removeFromCart(item) {
// write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
