//variáveis globais
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
let todoTitle;

//eventos

//este evento captura o texto digitado no input "adicionar"ao clicar o botão "+".
todoForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const inputValue = todoInput.value 

    if(inputValue){
        saveTodo(inputValue)
    }
})

document.addEventListener("click", (e)=>{
    const targetEl = e.target;
    const parentEl = targetEl.closest("div")

    if( targetEl.classList.contains("finish-todo")){
        targetEl.style.textDecoration = "line-through"
    }
    
})

//funções
function LimparInput(){
    todoInput.value = ""
}


const saveTodo = (inputValue)=>{
    const todo = document.createElement("div")
    todo.classList.add("todo", "done")
    
    let todoTitle = document.createElement("h3")
    todoTitle.innerText = inputValue

    //criando botão de finalizar tarefa
    const doneBtn = document.createElement("button")
    doneBtn.classList.add("finish-todo")
    doneBtn.innerHTML = `
    <i></i>`
    doneBtn.innerText = "v"
    //criando botão de editar tarefa
    const editBtn = document.createElement("button")
    editBtn.classList.add("edit-todo")
    editBtn.innerHTML = `
    <i></i>`
    editBtn.innerText = `...`
    //criando botão de remover tarefa
    const deleteBtn = document.createElement("button")
    deleteBtn.classList.add("remove-todo")
    deleteBtn.innerHTML = `
    <i></i>`
    deleteBtn.innerText = `-`

    todo.appendChild(todoTitle);
    todo.appendChild(doneBtn)
    todo.appendChild(editBtn)
    todo.appendChild(deleteBtn)
    todoList.appendChild(todo)
    

    LimparInput();    
}
