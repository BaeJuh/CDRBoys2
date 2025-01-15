interface Logic {
    logFormula: (x: boolean, y: boolean, z: boolean) => string;
}

const logFormula = (x: boolean, y: boolean, z: boolean) => {
    return (x || (!x && y && z) || (y! && z!)) ? "1" : "0";
}

const result: boolean[][] = [];

const allEvent = (temp: boolean[] = []) => {
    const boolEvent = [true, false];

    if (temp.length === 3) {
        result.push(temp);
        return temp;
    }

    boolEvent.forEach( (bool) => {
        temp.push(bool);
        allEvent(temp);
    } );
}

allEvent();
console.log(result);

const [x, y, z]: boolean[][] = [[true, false], [true, false], [true, false]];

export { }