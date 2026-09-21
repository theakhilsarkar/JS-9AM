const inputIdText = document.getElementById("input-id-text");
const inputNameText = document.getElementById("input-name-text");
const inputCourseText = document.getElementById("input-course-text");

const btnSubmit = document.getElementById("btn-submit");
const btnRead = document.getElementById("btn-read");
const btnDelete = document.getElementById("btn-delete");

const outputIdText = document.getElementById("output-id-text");
const outputNameText = document.getElementById("output-name-text");
const outputCourseText = document.getElementById("output-course-text");

// store text into localstorage
btnSubmit.addEventListener("click", () => {
  const id = inputIdText.value;
  const name = inputNameText.value;
  const course = inputCourseText.value;
  const obj = { id, name, course };

  localStorage.setItem("student", JSON.stringify(obj));
});
// fetch text from localstorage and display in html
btnRead.addEventListener("click", () => {
  const student = JSON.parse(localStorage.getItem("student"));

  outputIdText.textContent = student.id;
  outputNameText.textContent = student.name;
  outputCourseText.textContent = student.course;
});

// delete from localstorage and empty p tag
btnDelete.addEventListener("click", () => {
  localStorage.removeItem("student");

  outputIdText.textContent = "";
  outputNameText.textContent = "";
  outputCourseText.textContent = "";
});

// old method --->
// btnSubmit.addEventListener("click", () => {
//   const id = inputIdText.value;
//   const name = inputNameText.value;
//   const course = inputCourseText.value;

//   localStorage.setItem("id", id);
//   localStorage.setItem("name", name);
//   localStorage.setItem("course", course);
// });

// // fetch text from localstorage and display in html
// btnRead.addEventListener("click", () => {
//   const id = localStorage.getItem("id");
//   const name = localStorage.getItem("name");
//   const course = localStorage.getItem("course");

//   outputIdText.textContent = id;
//   outputNameText.textContent = name;
//   outputCourseText.textContent = course;
// });

// // delete from localstorage and empty p tag
// btnDelete.addEventListener("click", () => {
//   localStorage.removeItem("id");
//   localStorage.removeItem("name");
//   localStorage.removeItem("course");

//   outputIdText.textContent = "";
//   outputNameText.textContent = "";
//   outputCourseText.textContent = "";
// });


//