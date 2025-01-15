interface Person {
    name: string;
    age?: number;
}

interface Student extends Person {
    grade: number;
}

interface Developer extends Person {
    skills: string[];
}

interface WebDeveloper extends Person, Developer {}

const student: Student = {
    name: "Lee",
    age: 20,
    grade: 3
}

const webDeveloper: WebDeveloper = {
    name: "Bae",
    age: 20,
    skills: ["HTML", "CSS", "JavaScript"]
}

export {}