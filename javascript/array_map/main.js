const todos = [
    { id: 1, task: "Learn JavaScript", completed: false },
    { id: 2, task: "Practice React", completed: true },
    { id: 3, task: "Build a project", completed: false },
]

// You can use the map() method on an array to create a new array with modified elements.
// In this case we will use map to create a new array with just the ids and description.
const mappedTodos = todos.map((todo) => {
    return { id: todo.id, desc: todo.task }
});

// Print the elements of the new array 'mappedTodos'.
mappedTodos.forEach((todo) => {
    console.log(todo);
});

// You can also use the spread operator to iterate through an array and append to it.
// In this case we will append to each array element with a priority "High".
const priorityTodos = todos.map((todo) => {
    return { ...todo, priority: "High" }
})

// Print the elements of the new array priorityTodos.
priorityTodos.forEach((todo) => {
    console.log(todo);
});
