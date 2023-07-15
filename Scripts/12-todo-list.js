const todoList = [{
    name: 'Prayers',
    dueDate: '2023-07-05'
}, {
    name: 'Coding',
    dueDate: '2023-08-07'
},];

renderTodoList();

function renderTodoList() {

    let todoListHTML = '';

    todoList.forEach((todoObject, index) => {
        const { name, dueDate } = todoObject; /* Destructuring */
        const html =
            `<div>${name}</div>
        <div>${dueDate}</div> 
        <button class="delete-btn js-delete-task">Delete</button>
        `;
        todoListHTML += html;
    });

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;

    document.querySelectorAll('.js-delete-task')
        .forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', () => {
                // console.log(index);
                todoList.splice(index, 1);
                renderTodoList();
            });
        });
}

document.querySelector('.js-add-task')
    .addEventListener('click', () => {
        addTodo();
    });

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    todoList.push({
        // name: name,
        // dueDate: dueDate,
        name,
        dueDate
    });


    inputElement.value = '';

    renderTodoList();
} 