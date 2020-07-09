// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listeners
todoButton.addEventListener('click', addTodo)

// Fuctions
function addTodo(event) {
    event.preventDefault();
    const text = todoInput.innerHTML;

    const div = document.createElement('div');
    div.classList.add('todo');

    const item = document.createElement('li');
    item.classList.add('todo-item');
    item.innerText = todoInput.value;

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

    todoInput.value = '';
}