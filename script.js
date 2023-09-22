const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// mostrando o ano atual
const dataNow = new Date();
const yearNow = dataNow.getFullYear();
document.getElementById('year').innerHTML = yearNow;

function addGoal() {
    if(inputBox.value === '') {
        alert("Você precisa escrever algum objetivo!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveGoal();
}

listContainer.addEventListener("click", function (e) {
    if(e.target.tagName === "LI") {
         e.target.classList.toggle("checked");
         saveGoal();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveGoal();
    }
}, false);

function saveGoal() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showGoal() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showGoal();