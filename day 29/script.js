// data = information
// store

// RAM(temp) and Memory(permenent)
// RAM -> MEMORY

// built in storage option
// localstorage - easy, permenent
// 5mb to 10mb
// only string information

// array --> string
// key value

// 45mb --> 456mb

// localStorage.setItem() // --> data store
// localStorage.getItem() // data fetch
// localStorage.removeItem() // data remove
// localStorage.clear() // clean all data from localstorage

localStorage.setItem("name", "Aman");
localStorage.setItem("age", 12);

const student = { name: "Aman", age: 19 };
// when you have to convert array/object into string -->
localStorage.setItem("student", JSON.stringify(student));

const a = [1, 2, 3, 4];
localStorage.setItem("numbers", JSON.stringify(a));

const data = localStorage.getItem("student");
console.log(JSON.parse(data));

localStorage.setItem("name2", "chaman");

// localStorage.clear();
// const a = 10;
// const b = "12";
// const c = a + parseInt(b);
// console.log(c);

// 5mb - 200
// text infor
// Todo App = Create Read Update Delete
// data stored - localstorage

// ecommerce --> product CRUD, cart page
