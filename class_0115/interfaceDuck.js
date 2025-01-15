"use strict";
class MallardDuck {
    quack() {
        console.log("Quack");
    }
}
class RedheadDuck {
    quack() {
        console.log("Q~uack");
    }
}
const makeNoise = (duck) => {
    duck.quack();
};
makeNoise(new MallardDuck());
makeNoise(new RedheadDuck());
