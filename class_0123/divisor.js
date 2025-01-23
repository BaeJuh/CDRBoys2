console.log([...new Array(16)].reduce((acc, _, i) => {
    console.log(i)
    return 16 %(i) === 0 ? (i) : acc;
},0));