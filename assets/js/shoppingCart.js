const openShoppingIcon = document.querySelector(".shooping-cart-icon");
let shoppingCart = document.querySelector(".shopping-cart-screen");
const closeShoppingIcon = document.querySelector(
  ".close-shopping-icon"
);

function openShoppingCart() {
  shoppingCart.classList.toggle("active");
}
function closeShoppingCart() {
  shoppingCart.classList.remove("active");
}
openShoppingIcon.addEventListener("click", (e) => {
  openShoppingCart();
});

closeShoppingIcon.addEventListener("click", (e) => {
  closeShoppingCart();
});
