const previousCalc = document.getElementById('preview-calc')
const currentCalc = document.getElementById('current-calc')
const buttons = document.querySelector('#buttons-calc button')

class Calculadora {
    constructor(poText, crText) {
        this.poText = poText;
        this.crText = crText;
        this.crText = "";
    }
}

// adicionando digito na tela 

addDigit(digit); {
    console.log(digit);
}

buttons.forEach((btn) => {
    btn.addEventListener("Click", (e) => {
        const value = e.target.innerText;
        console.log(value);

        if(+value >= 0 || value === ".") {
            calc.addDigit(value);
        }else {
            console.log("Op" + value);
        }

    });
});
