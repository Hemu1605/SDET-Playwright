function getData(success) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (success) {
                resolve("Data received");
            } else {
                reject("Failed to fetch data");
            }

        }, 2000);
    });
}

// Calling Promise
getData(false)
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });


// setTimeout(() => {
//     console.log("Data received");
// }, 5000);


// setInterval(() => {
//     console.log("Checking for new data...");
// }, 3000);