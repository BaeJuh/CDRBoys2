const amebaCounter = (time) => {
    // let result = 0;
    // for (let i = 0; i < time; i++) {
    //     result += (3**i);
    // }

    // console.log(result);

    // 생명주기 3;
    let result = 0;
    for (let i = (time - 3); i < time; i++) {
        result += (3 ** (i));
    }

    console.log(result);
}

amebaCounter(19);