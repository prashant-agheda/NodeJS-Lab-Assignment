/*
    Name: Prashant Agheda
    PRN No: 20180201001

    17. WAP in node.js to allow the binding of at most one listener with user defined event called "Mystud".
*/


// Load the events module that returns EventEmitter class
const EventEmitter = require("events");

// Creating Instance of EventEmitter class
const emitterObject = new EventEmitter();

var count = 0;

// Binding the Listener AT MOST 1 TIME using once()
emitterObject.once("Mystud", function(){
    count++;
    console.log("Mystud Event Called", count, "times");
});

// Raise the Event
// Even if we raise the event multiple times, it gets executed only once because of once() method
emitterObject.emit("Mystud");
emitterObject.emit("Mystud");
emitterObject.emit("Mystud");
emitterObject.emit("Mystud");