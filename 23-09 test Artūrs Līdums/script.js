const textInput = document.getElementById("ideaText");
const colorInput = document.getElementById("colorPicker");
const addBtn = document.getElementById("addBtn");
const board = document.getElementById("board");
const counter = document.getElementById("counter");

textInput.addEventListener("input", () => {
    counter.textContent = '${textInput.value.lenght} / 60';
});

addBtn.addEventListener("click", () => {
    const text = textInput.value.trim();
    const color = colorInput.value;
});


if (text == "") {
    alert("Write something.");
    return;
}

const note = document.createElement("div");
note.classList.add("note");
note.style.backgroundColor = color;

const timestamp = document.createElement("div")