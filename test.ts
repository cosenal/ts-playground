const enum blah {
    test = 1,
    foo = 2,
    bar = 3,
};

type newError = {
  code: blah.bar;
};

var a: newError = { code: 'a' }; // ERROR
// var b: newError = { code: blah.foo }; // ERROR
var c: newError = { code: blah.bar }; // WORKS
var d: newError = { code: 123 }; // WORKS.. WTF!?