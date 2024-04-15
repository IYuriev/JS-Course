function showResults(promise1, promise2, promise3) {
    Promise.allSettled([promise1, promise2, promise3])
        .then((result) => {
            result.forEach((item) => {
                if (item.status === 'fulfilled') {
                console.log(item.value);
                } else {
                    console.log(item.reason);
                }
            })
        })
}

const promise1 = new Promise((resolve) => {
    resolve('Hi!');
});

const promise2 = new Promise((resolve, reject) => {
    reject('Bye!');
});

const promise3 = new Promise((resolve) => {
    resolve('Hello!');
});

showResults(promise1, promise2, promise3);
