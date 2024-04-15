function callback_BasedFunction(arg1, arg2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = arg1 + arg2;
            if (result % 2 !== 0) {
              resolve(result);
            } else {
              reject(new Error('Result is not odd!'));
            }
          }, 1000);
    })
}

callback_BasedFunction(3,2)
    .then((result) => {
        console.log(`Result: ${result}`);
    })
    .catch((error) => {
        console.log('Error:', error.message);
    })