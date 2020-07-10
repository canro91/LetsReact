// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

// Event Listeners
document.addEventListener('DOMContentLoaded', getFromLocalStorage);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteOrCheckTodo);
filterOption.addEventListener('click', filterTodos);

// Fuctions
function addTodo(event) {
    event.preventDefault();

    const text = todoInput.value;
    appendNewTodo(text);
    saveToLocalStorage(text);

    todoInput.value = '';
}

function appendNewTodo(todo){
    const div = document.createElement('div');
    div.classList.add('todo');

    const item = document.createElement('li');
    item.classList.add('todo-item');
    item.innerText = todo;

    const completeButton = document.createElement('button');
    completeButton.classList.add('complete-btn');
    completeButton.innerHTML = '<i class="fas fa-check"></i>';

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';

    div.appendChild(item);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    todoList.appendChild(div);
}


function deleteOrCheckTodo(event) {
    const item = event.target;
    const todo = item.parentElement;
    if (item.classList[0] === 'delete-btn') {
        todo.classList.add('todo-item-deleted');

        removeFromLocalStorage(todo);
        todo.addEventListener('transitionend', function () {
            todo.remove();
        });
    }
    if (item.classList[0] === 'complete-btn') {
        todo.classList.toggle('todo-item-completed');
    }
}

function filterTodos(event) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch (event.target.value) {
            case 'all':
                todo.style.display = 'flex';
                break;

            case 'completed':
                if (todo.classList.contains('todo-item-completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;

            case 'uncompleted':
                if (!todo.classList.contains('todo-item-completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
        }
    });
}

function saveToLocalStorage(todo) {
    const existingTodos = localStorage.getItem('todos');
    const todos = existingTodos === null
                    ? []
                    : JSON.parse(existingTodos);
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getFromLocalStorage(){
    const existingTodos = localStorage.getItem('todos');
    const todos = existingTodos === null
                    ? []
                    : JSON.parse(existingTodos);

    todos.forEach(function(todo){
        appendNewTodo(todo)
    });
}

function removeFromLocalStorage(todo) {
    const existingTodos = localStorage.getItem('todos');
    const todos = existingTodos === null
                    ? []
                    : JSON.parse(existingTodos);
    
    const removing = todo.querySelector('.todo-item').innerText;
    const index = todos.indexOf(removing);
    todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}