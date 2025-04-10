const resolvePromise = Promise.resolve([1, 2, 3]);
resolvePromise.then(console.log);

const resolvePromise2 = new Promise(resolve => resolve([4, 5, 6]));
resolvePromise2.then(console.log);

const rejectPromise = Promise.reject(new Error("Error1"));
rejectPromise.catch(console.log);

const rejectPromise2 = new Promise(reject => reject(new Error("Error2")));
rejectPromise2.catch(console.log);