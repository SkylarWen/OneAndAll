
class AntraMath {
    constructor(input) {
        this.input = input;
    }

    add(numA){
        return this.input += numA;
    }

    multiply(numB){
        return this.input *= numB;
    }
    done(){
        return this.input;
    }
}


let myMath = new AntraMath(10);
console.log(myMath);

let res = myMath.add(5).multiply(2).done();
console.log(res)
