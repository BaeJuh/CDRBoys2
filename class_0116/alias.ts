`
interface Person {
    name:string;
    age?:number
}

const person = {} as Person;
person.name = "Bae";
person.age = 27;
// person.address = "Hwaseong";
`

type Person = {
    name:string;
    age?:number
}

const person = {} as Person;
person.name = "Bae";
person.age = 27;
// person.address = "Hwaseong";