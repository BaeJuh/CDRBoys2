const EventEmitter = require("events");

const myEvent = new EventEmitter();

myEvent.addListener("e1", () => {
    console.log("event1");
});

myEvent.on("e2", () => {
    console.log("event2");
}); 

myEvent.on("e2", () => {
    console.log("bonus event2");
}); 

myEvent.once("e3", () => {
    console.log("event3");
});

myEvent.emit("e1");
myEvent.emit("e2");
myEvent.emit("e3");
myEvent.emit("e3");

myEvent.on("e4", ()=>{
    console.log("event4");
} );

myEvent.removeAllListeners("e4");
myEvent.emit("e4");

const listener = () => {
    console.log("event5");
}

myEvent.on("e5", listener);

myEvent.off("e5", listener);
myEvent.emit("e5");

console.log(myEvent.listenerCount("e2"));