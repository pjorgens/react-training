// Use promises to catch results for passing or failing code.
const promise = new Promise((resolve, rejected) => {
    setTimeout(() => {
        // resolve("Operation successful");
        rejected("Operation failed");
    }, 2000)
});

// Use resolve or reject to trigger the results of the promise.
promise
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.error(err);
    });
