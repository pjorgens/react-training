// You can use fetch() as a promise.
fetch("https://www.example.com")
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.error(err);
    });

// Sometimes you have a promise that returns another promise.
// In this case, result.json() RETURNS a promise.
// To address this we can chain then() statements together to resolve each promise.
// We're not getting json as a result though, so here we will just error out.
fetch("https://www.example.com")
    .then((result) => result.json())
    .then((data) => console.log(data))
    .catch((err) => {
        console.error(err);
    });
