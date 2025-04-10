const users = ["BaeJuh", "JuhWan", "ungmo2"];

// Promise.all(users.map((user) => fetch(`https://api.github.com/users/${user}`)))
//     .then(res => Promise.all(res.map(res => res.json())))
//     .then(console.log)
//     .catch(console.log);

Promise.all(users.map((user) => fetch(`https://api.github.com/users/${user}`)))
    .then(res => console.log(res))
    .then(console.log)
    .catch(console.log);