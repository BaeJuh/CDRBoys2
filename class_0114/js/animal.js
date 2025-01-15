"use strict";
class Animal {
    move() {
        console.log("roaming the earth...");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("bowwow~~");
    }
}
const myDog = new Dog();
myDog.makeSound();
myDog.move();
