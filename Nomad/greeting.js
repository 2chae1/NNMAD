const form = document.querySelector(".login");
const input = form.querySelector("input");
const greeting = document.querySelector(".greeting");

const USER = "savedUser"; // localStorage key
const HIDDEN = "hidden"; // Class Addition

//Event Handler
function handleSubmit(event) {
    event.preventDefault();
    const savedUser = input.value;
    paintGreeting(savedUser);
    saveName(savedUser);
}

function paintGreeting(text) {

    console.log(text);

    form.classList.add(HIDDEN);
    greeting.classList.remove(HIDDEN);
    greeting.innerText = `Hi, ${text}`;
}

function askName() {
    form.classList.remove(HIDDEN);
    form.addEventListener("submit",handleSubmit);
}

function saveName(text) {
    localStorage.setItem(USER,text);
}

function loadName() {
    const savedUser = localStorage.getItem(USER);

    if(savedUser=== null) {
        askName();
    } else {
        paintGreeting(savedUser);
    }
}

function init() {
    loadName();
}

function deleteLocalStorage() {
    localStorage.removeItem(USER);
}


//deleteLocalStorage();
init();