interface IDuck {
    quack(): void;
}

class MallardDuck implements IDuck {
    quack(): void {
        console.log("Quack");
    }
}

class RedheadDuck {
    quack(): void {
        console.log("Q~uack");
    }
}

const makeNoise = (duck: IDuck) => {
    duck.quack();
}

makeNoise(new MallardDuck());
makeNoise(new RedheadDuck());