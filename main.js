//make a to do list abstraction

var todoList = [
    {
        text: "get cat food"
    },
    {
        text: "vacuum"
    },
    {
        text: "water change"
    }
];

//render the abstraction

function renderTodoList(list) {
    var todo = list.map(function(item) {
       return `
        <li>${item.text}</li>
        `
    });
    return todo.join("");
}

//as soon as page loads, show list to screen
document.getElementById("todo-list-container").innerHTML = renderTodoList(todoList);

//when user adds item to the list
function addTodo(item) {
    todoList.push(item);
}

//every time they add an item update the array of todo items, then the render
//function will do the rest!

document.getElementById("todoInput").addEventListener("change", function(){
    var enteredText = this.value;
    var newTodo = {
        text: enteredText
    }

    //trigger the action of adding a new todo item
    addTodo(newTodo);
    document.getElementById("todo-list-container").innerHTML = renderTodoList(todoList);
    this.value = "";
});