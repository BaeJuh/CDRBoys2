const data = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];

const shuffle = (data) => {
    const result = [];

    const rotate = (r = []) => {
        if (r.length === 3) {
            result.push(r);
            return ;
        } else {
            for (let i = 0; i < 3; i++) {
                const temp = [...r];
                temp.push(data[r.length][i]);
                rotate(temp);
            }
        }
    }
    rotate();
    return result;
}

console.log(shuffle(data));
console.log(shuffle(data).length);