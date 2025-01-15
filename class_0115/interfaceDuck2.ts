interface IPerson {
    name: string;
}

const sayHello = (person: IPerson) => {
    console.log(`Hello my name is ${person.name}`);
}

const me = { name: "Bae", age: 27 };
sayHello(me);

export {}
