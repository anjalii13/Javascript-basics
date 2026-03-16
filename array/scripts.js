toDos = []
function renderToDos() {
    document.querySelector("#resultToDo").innerHTML = toDos.map((task) => `
                              <div>
                              <b>${task}</b>
                              <button class="btn btn-danger" onclick='deleteTask("${task}")'>Delete</button>
                              </div>
`).join("")
}
function addToDo() {
    toDoinput = document.getElementById("taskInput")
    newTODO = toDoinput.value
    toDos.push(newTODO)
    renderToDos()
    console.log(toDoinput.value)
    toDoinput.value = ""
    console.log(toDoinput.value)
}

function clearAllToDo() {
    toDos = []
    renderToDos()
}
function deleteTask(i){
    toDos.splice(i,1)
    renderToDos()
}