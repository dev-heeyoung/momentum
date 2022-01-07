const toDoForm = document.querySelector("#toDo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#toDos");

const TODOS_KEY = "toDo";
let toDos = [];

function saveToDo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter(item => item.id !== parseInt(li.id));
    saveToDo();
    li.remove();
}

function paintToDo(newToDoObj) {
    const li = document.createElement("li");
    li.id = newToDoObj.id;
    const span = document.createElement("span");
    span.innerText = newToDoObj.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);

    button.addEventListener("click", deleteToDo);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        id: Date.now(),
        text: newToDo
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const stringToDos = localStorage.getItem(TODOS_KEY);

if (stringToDos !== null) {
    const parsedToDos = JSON.parse(stringToDos);
    toDos = parsedToDos;
    toDos.forEach(paintToDo);
}
