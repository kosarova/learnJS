function Calc() {
    this.read = function(){
        this.a = +prompt('first num', '');
        this.b = +prompt('second num', '');
    };
    this.mul = function() {
        return this.a * this.b;
    };
    this.sum = function() {
        return this.a + this.b;
    };
}

let calc = new Calc();
calc.read();
alert('Sum=' + calc.sum() );
alert('Mul=' + calc.mul() );