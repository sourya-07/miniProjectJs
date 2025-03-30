const todoList = [{
    name: 'make dinner',
    duedate: '2022-12-22',},
    {
    name: 'Wash dishes',
    duedate: '2022-12-22',},
]

renderTodoList();
function renderTodoList(){
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        // const todoObject = todoList[i];
        // const name = todoObject.name;
        // const duedate = todoObject.duedate;
        const{ name, duedate } = todoList[i];
        const html = `
        <p>
        ${name} ${duedate}
        <button onclick="
            todoList.splice(${i}, 1);
            renderTodoList();
        ">Delete</button>
        </p>`;
        todoListHTML += html;
    }
    // console.log(todoListHTML);
    
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
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