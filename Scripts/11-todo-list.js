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

    for(let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate;
        const { name, dueDate } = todoObject; /* Destructuring */
        const html = 
        `<div>${name}</div>
        <div>${dueDate}</div> 
        <button onclick=" 
            todoList.splice(${i}, 1);
            renderTodoList();
        " class="delete-btn">Delete</button>
        `;
        todoListHTML += html;
    }
    

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;
}

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