// console.log(localStorage.getItem("products"));

// add to cart
// price calc, based on qty =

// user ecom - API

// API - Application Programming Interface
// API is used to connect backend with frontend.
// api is one type of url which act as a bridge between client and server.

// client - who send request on the server
// server - who respond to the request comes from the client / handle request comes from the client

// request - when client require some information/data from server, then it send a request.
// response - when server return information/data  to the client for asked request.

// client -> api -> server
// server -> api -> client

// private - limited
// public - accessible for everyone

// api calling = use api to get/post/put/delete request to the server

// GET = DATA FETCH
// POST = DATA SEND
// PUT = DATA UPDATE
// DELETE = DATA DELETE]

// https://www.google.com/search?q=bear

// JSON - Javascript Object Notation - array of objects

// api calling
// api - internet - on moment future

// data form
// promise -

// const data = fetch("https://jsonplaceholder.typicode.com/photos");
// console.log(data);

// const photosBox = document.getElementById("photos");

// fetch("https://jsonplaceholder.typicode.com/photos")
//   .then((res) => res.json())
//   .then((data) => {
//     data.forEach((element) => {
//       const img = document.createElement("img");
//       img.src = element.thumbnailUrl;
//       photosBox.appendChild(img);
//     });
//   });

// promise - is form/state of data which define data is one the way, will come.

// project description
// 1. fetch products from api and display in grid view.
// 2. add to cart - add product in localstorage for cart handling.
// 3. additional page/new page = show all cart products by view cart button
// 4. unique products display
// 5. increment/decrement in products quanitity
// 6. total calculation with discount and 18% GST + increment/decrement quantity.
// 7. if decrement in products quanitity after 1 will remove product.
// 8. increment in products quanitity not allow more than stock.

const productContainer = document.getElementById("products-container");

const fetchProducts = () => {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
      displayProducts(data.products);
    });
};

const displayProducts = (products) => {
  products.forEach((element) => {
    const div = document.createElement("div");
    div.className = "card";
    div.style.width = "18rem";

    div.innerHTML = ` <img
    src="${element.thumbnail}"
    class="card-img-top"
    alt="..."
  />
  <div class="card-body">
    <h5 class="card-title">${element.title}</h5>
    <p class="card-text">
    ${element.description}
    </p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${element.returnPolicy}</li>
    <li class="list-group-item">${element.rating}🌟</li>
    <li class="list-group-item">Price - USD ${element.price} Only/-</li>
  </ul>
  <div class="card-body">
    <button class="btn btn-primary w-100">Add to Cart</button>
  </div>`;

    productContainer.appendChild(div);
  });
};

fetchProducts();
