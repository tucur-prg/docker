'use strict';
const EventEmitter = require('events').EventEmitter;

// ES6
class Base extends EventEmitter {
    constructor() {
        super();
    }

    func() {
        this.emit('action', '123');
    }
}

let obj = new Base();

obj.on('action', v => console.log(v));

obj.func();
