// create a note making app, where user can create upto 150 characters note, user can also add more than one notes, and display all notes in grid view and boxes color should be different for each notes.

const input_note = document.getElementById("input-note");
const input_btn = document.getElementById("input-btn");

const notes_box = document.getElementById("notes-box");

const handleCreateNote = () => {
  const value = input_note.value; // value = Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur

  // random color generation
  const color = "#" + Math.floor(Math.random() * 16581375).toString(16);

  const div = document.createElement("div"); // <div></div>
  div.className = "px-3 py-3 rounded"; // <div class="bg-warning px-3 py-3 rounded"></div>
  div.id = "note";
  div.style.backgroundColor = color;
  div.textContent = value; //<div class="bg-warning px-3 py-3 rounded"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur</div>

  notes_box.appendChild(div); // we are insert new div into notes box

  input_note.value = ""; // we are empty value of input box
};

input_btn.addEventListener("click", handleCreateNote);

// CRUD = 
// Create, add, insert
// Read = display
// Update, modify, edit
// Delete, remove

// create, display