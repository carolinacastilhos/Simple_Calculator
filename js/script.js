const lastOperationText = document.querySelector(".last-operation")
const currentOperationText = document.querySelector(".current-operation")
const buttons = document.querySelectorAll(".buttons button")

class Calculator {
    construtctor(lastOperationText, currentOperationText) {
        this.lastOperationText = lastOperationText
        this.currentOperationText = currentOperationText
        this.currentOperation = ""
    }
  
    
   addDigit(digit) {
    
    // if(digit === "." && this.currentOperationText.innerText.includes(".")) {
    //     return;
    // }

    this.currentOperation = digit;
    this.updateScreen();
   } 
    
   updateScreen() {
    this.currentOperationText.innerText += this.currentOperation;
   }

}

const calc = new Calculator(lastOperationText, currentOperationText);

buttons.forEach((btn)=> {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;

        if (+value >= 0 || value === ".") {
            calc.addDigit(value);
        }else {
            console.log("Op: " + value);
        }
    });
});