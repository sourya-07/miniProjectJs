let todoList = [{
    name: 'Workout',
    duedate: '2023-10-01',},
    
]



renderTodoList();
function renderTodoList(){
    let todoListHTML = '';

    todoList.forEach((todoObject, index) => {
        const{ name, duedate } = todoObject;
        const html = `
        <div>${name}</div>
        <div>${duedate}</div>
        <button onclick="
            todoList.splice(${index}, 1);
            renderTodoList();
        " class="delete-todo-button js-delete-todo-button">Delete</button>
        `;
        todoListHTML += html;
    });
    
    
    /*
    for (let i = 0; i < todoList.length; i++) {

        // const todoObject = todoList[i];
        // const name = todoObject.name;
        // const duedate = todoObject.duedate;
        const{ name, duedate } = todoList[i];
        const html = `
        <div>${name}</div>
        <div>${duedate}</div>
        <button onclick="
            todoList.splice(${i}, 1);
            renderTodoList();
        " class="delete-todo-button">Delete</button>
        `;
        todoListHTML += html;

    }
    */   

    // console.log(todoListHTML);
    
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
    const deleteButtons = document.querySelectorAll('.js-delete-todo-button');
    deleteButtons.forEach(button => {
        button.style.display = todoList.length > 0 ? 'inline-block' : 'none';
    });

    document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            todoList.splice(index, 1);
            renderTodoList();
        });
})

document.querySelector('.js-add-todo-button')
.addEventListener('click', () => {
    addTodo();
})

}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dataInputElement = document.querySelector('.js-due-date-input');

    const duedate = dataInputElement.value;


    // console.log(name);
    todoList.push({
        // name: name,
        // duedate: duedate; 
        name,
        duedate,
    })

    // console.log(todoList);

    inputElement.value = '';
    dataInputElement.value = '';
    
    renderTodoList(); 

    

}