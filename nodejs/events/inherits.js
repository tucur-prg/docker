'use strict';
const util = require('util');
const EventEmitter = require('events').EventEmitter;

// ES5
function Base() {
    EventEmitter.call(this);
}
util.inherits(Base, EventEmitter);

// allow 演算子を使うとスコープが変わるので注意 () => { this.emit('act', 1); } はエラーになる
Base.prototype.func = function () {
    this.emit('action', '123');
};

let obj = new Base();

obj.on('action', v => console.log(v));

obj.func();
