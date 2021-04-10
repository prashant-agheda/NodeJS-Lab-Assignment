/*
    Name: Prashant Agheda
    PRN No: 20180201001

    16. WAP in node.js to create user defined event as "Myevent" and perform following operations on it.
        - Bind the 3 listeners with event
        - Raise the event
        - List all the listeners
        - Find number of listeners registered with "Myevent"
        - Remove single listener registered with "Myevent"
        - Remove all listeners registered with "Myevent"
*/


// Loading the events module and returning EventEmitter Class
const EventEmitter = require("events");

// Creating Object of EventEmitter Class
const emitterObject = new EventEmitter();

// Raise the Listener Function First - which will listen out event
var fun1 = function() {
    console.log("Function fun1 executed");
};

// Binding the 3 Listeners with the Event
emitterObject.on("Myevent", fun1);
emitterObject.on("Myevent", fun1);
emitterObject.on("Myevent", fun1);

// List all the listeners
console.log("\nList of Listeners: " + emitterObject.listeners('Myevent'));

// Find number of listeners registered with "Myevent"
var listenersCount = emitterObject.listenerCount("Myevent");
console.log("Total No of Listeners registered with Myevent Event : " + listenersCount);

// Emit the Event means Call the event / Raise the event
emitterObject.emit("Myevent");


// Removing SINGLE Listener
emitterObject.removeListener("Myevent", fun1);

console.log("\nList of Listeners: " + emitterObject.listeners("Myevent"));

var listenersCount = emitterObject.listenerCount("Myevent");
console.log("After Removing 1 Listener, Total No of Listeners registered with Myevent Event : " + listenersCount);

// Removing ALL Listeners
emitterObject.removeAllListeners("Myevent");
console.log("\nList of Listeners: " + emitterObject.listeners("Myevent"));

var listenersCount = emitterObject.listenerCount("Myevent");
console.log("After Removing ALL Listeners, Total No of Listeners registered with Myevent Event : " + listenersCount);