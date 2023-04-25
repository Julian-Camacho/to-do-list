const newTask = document.querySelector("#newTask");
const list = document.querySelector("#list");


function addTask(){
    if(newTask.value === ""){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = newTask.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "x";
        li.appendChild(span);
    }

    newTask.value= "";
    saveList()
}

list.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveList()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveList()
    }
})

function saveList(){
    localStorage.setItem("data", list.innerHTML);
}

function show(){
    list.innerHTML = localStorage.getItem("data");
}

show()