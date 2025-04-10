const fibonacci = () => {
    const result = [1 ,1];
    let pos = 1;

    while(result[result.length - 1] < 100) {
        result.push(result[pos - 1] + result[pos]);
        pos ++;
    }

    return result;
}

console.log(fibonacci());