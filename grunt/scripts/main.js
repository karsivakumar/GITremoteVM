// es2016 code

class Person {
    constructor (name) {
        this.name = name;
    }
    hello() {
        if (typeof this.name === 'string') {
            return 'hello, this is ' + this.name + '!'
        }
        else{
            return 'hello!'
        }
    }
}

var Person1 = new Person('karthik');

document.write(Person1.hello());

// normal javascript code 

// var name = 'malini';

// document.write('hello ' + name + '!');