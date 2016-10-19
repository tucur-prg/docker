'use strict';
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/arrow_functions

const func1 = function () {
    console.log(this); // ブロック内を参照している、new しない場合は undefined
}

const func2 = () => {
    console.log(this); // グローバルを参照している
}

this.var = 1;

func1();
func2();

func1.prototype.func3 = function () {
    console.log(this); // ブロック内を参照している
}

func1.prototype.func4 = () => {
    console.log(this); // グローバルを参照している
}

let obj1 = new func1();
obj1.func3();
obj1.func4();
