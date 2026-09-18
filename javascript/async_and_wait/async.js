// In reality fetch functions are asynchronous functions.
// Many users can call them at once and they run concurrently/asynchronously.
async function fetchDataAsync() {
    return fetch("https://www.example.com")
        .then((result) => {
            console.log(result);
        })
        .catch((err) => {
            console.error(err);
        });
};

fetchDataAsync();

// We use try and catch blocks to make cleaner asynchronous functions.
async function fetchDataAsync() {
    try {
        const response = await fetch("https://www.example.com");
        console.log(response);
    } catch (err) {
        console.error(err);
    }
};

fetchDataAsync();

