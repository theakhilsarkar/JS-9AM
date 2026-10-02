const cartContainer = document.getElementById("cart-container");

const displayProductsFromCart = () => {
  cartContainer.innerHTML = "";
  const cartList = JSON.parse(localStorage.getItem("carts")) || [];
  cartList.forEach((element, i) => {
    const div = document.createElement("div");
    div.className = "card my-3 col-7";

    div.innerHTML = `<div class="card-body d-flex">
    <img
      height="150"
      width="150"
      class="rounded me-3"
      src="${element.thumbnail}"
      alt=""
    />
    <div>
      <h5 class="card-title">${element.title}</h5>
      <p class="card-text">
       ${element.description}
      </p>
      <p>Price. ${element.price} USD | Discount. ${element.discountPercentage}%</p>
      <div class="d-flex gap-3">
        <div>
          <button class="btn btn-primary" onclick="qtyDecrement(${i})">-</button>
          <span class="fs-5 fw-bold mx-3">${element.qty}</span>
          <button class="btn btn-primary" onclick="qtyIncrement(${i})">+</button>
        </div>
        <button class="btn btn-danger">Remove</button>
      </div>
    </div>
  </div>`;

    cartContainer.appendChild(div);
  });
};

const qtyDecrement = (index) => {
  const cartList = JSON.parse(localStorage.getItem("carts")) || [];
  cartList[index].qty--;
  if (cartList[index].qty == 0) {
    cartList.splice(index, 1);
  }
  localStorage.setItem("carts", JSON.stringify(cartList));
  displayProductsFromCart();
};
const qtyIncrement = (index) => {
  const cartList = JSON.parse(localStorage.getItem("carts")) || [];
  if (cartList[index].stock > cartList[index].qty) {
    cartList[index].qty++;
  }
  localStorage.setItem("carts", JSON.stringify(cartList));
  displayProductsFromCart();
};

const calculateBill = () => {
  const cartList = JSON.parse(localStorage.getItem("carts")) || [];
  let subtotal = 0;
  cartList.forEach((element) => {
    subtotal = subtotal + element.price * element.qty;
  });
  console.log(subtotal);
};

calculateBill();

displayProductsFromCart();
