Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)),
    new Promise(resolve => setTimeout(() => resolve(2), 2000)),
    new Promise(resolve => setTimeout(() => resolve(3), 1000)),
]).then(console.log).catch(console.log);

Promise.all([
    4, 5, 6
]).then(console.log).catch(console.log);

Promise.all([
    new Promise(reject => setTimeout(() => reject(new Error("Error1")), 3000)),
    new Promise(reject => setTimeout(() => reject(new Error("Error2")), 2000)),
    new Promise(reject => setTimeout(() => reject(new Error("Error3")), 1000)),
]).then(console.log).catch(console.log);