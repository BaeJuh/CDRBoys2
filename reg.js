const regex = /01[16790][.-\/\s]\d{3,4}[.-\/\s]?\d{4}/;

const phone =
    ["010.5598.9197", "010/5598/9197", "010 1234 5678"
    ];

const testPhone = phone.filter((item) => {
    return regex.test(item);
});

console.log(testPhone);

//const even = /^\d*[02468]$/;
//const odd = /^\d*[13579]$/;