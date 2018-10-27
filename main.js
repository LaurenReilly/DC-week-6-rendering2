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
    list.map(function(item) {
        return`
        <li>${item.text}</li>
        `
    });
}

//as soon as page loads, show list to screen
document.getElementById("todo-list-container").innerHTML = renderTodoList(todoList);

//when user adds item to the list
function addTodo() {

}