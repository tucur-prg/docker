'use strict';

function show(msg) {
    console.log(msg);
}

let showBind = show.bind(null, 200);

show(100);
showBind();

class Foo {
    constructor() {
        this.name = 'huga';
    }

    huga(msg) {
        console.log(this.name + ' at ' + msg);
    }
}

setTimeout(() => (new Foo).huga('false'), 1000);

let obj = new Foo();
let over = {name: 'hoge'};
setTimeout(obj.huga.bind(over, 'true'), 1200);
