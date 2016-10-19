'use strict';
const EventEmitter = require('events').EventEmitter;

function asyncFunc(arg) {
    var ev = new EventEmitter();

    console.log('in async');

    setTimeout(() => {
        ev.emit('done', 'foo', arg);
    }, 1000);

    return ev;
}

let obj = asyncFunc('bar');

obj.on('done', (arg1, arg2) => { console.log(arg1, arg2); });
