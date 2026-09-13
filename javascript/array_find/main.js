const todos = [
    { id: 1, task: "Learn JavaScript", completed: false },
    { id: 2, task: "Practice React", completed: true },
    { id: 3, task: "Build a project", completed: false },
]

// You can use find() to search through an array for matching data entries.
const todoById = todos.find((todo) => todo.id === 2);

// Here we will find the second element of the array with id === 2.
console.log(todoById);

// Find will give you the first entry which matches the search parameters.
const todoByCompleted = todos.find((todo) => todo.completed === false);

// Even though task 3 is also a match, we only get task 1 because its the first match.
console.log(todoByCompleted);

// You can search using multiple terms.
const todoMultipleTerms = todos.find((todo) => todo.completed === false && todo.task === "Build a project");

// Here we will get task 3.
console.log(todoMultipleTerms);
