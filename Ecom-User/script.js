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

const photosBox = document.getElementById("photos");

fetch("https://jsonplaceholder.typicode.com/photos")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element) => {
      const img = document.createElement("img");
      img.src = element.thumbnailUrl;
      photosBox.appendChild(img);
    });
  });
