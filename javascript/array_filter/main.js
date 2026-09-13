const todos = [
    { id: 1, task: "Learn JavaScript", completed: false },
    { id: 2, task: "Practice React", completed: true },
    { id: 3, task: "Build a project", completed: false },
]

// The filter() method is like find() but it will give you multiple matching results.
const completedTodos = todos.filter(todo => todo.completed == true);

// The filter() method will create a brand new array, not a string.
console.log(completedTodos)

// We can loop through an array using the forEach() method.
todos.forEach((todo, index) => {
    console.log(index + ": " + todo.task);
});

