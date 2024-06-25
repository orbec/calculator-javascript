console.log("yahooo!");

const display = document.querySelector(".display");
let current = display.textContent;
let old = 0;
let operation = "";
let add = true;

function setNumber(number){
    if (current.length >= 10 && add){
        return;
    }
     if (current === "0" || !add){
        old = current;
        current = number;
        add = true
     }else {
        current = current.toString() + number.toString();
     }
     refreshDisplay();
}

function setOperation (operator){
    if (operation !== ""){
        operate();
    }
    operation = operator;
    add = false;

}

function refreshDisplay() {
    display.textContent = current;
}

function operate (){
    const currNum = Number(current);
    const oldNum = Number(old)
    switch (operation){
        case "/":
            current = oldNum / currNum;
            break;
        case "*":
            current = oldNum * currNum;
            break;
        case "+":
            current = oldNum + currNum;
            break;
        case "-":
            current = oldNum - currNum;
            break;
        default:
            add = false;
            return;
    }
    operation = "";
    old = 0;
    add = false;
    if (current%1 === 0 && current.toString().length > 10){
        current = current.toExponential(2);
    }else if(current%1 !== 0){
        current = Math.round(current * 100)/ 100
    }
    refreshDisplay();
}

function setClean(){
    current = 0;
    old = 0;
    operation = "";
    add = false;
    refreshDisplay();

}

function setBack(){
    current = current.substring(0, current.length-1);
    if (current === "") current = "0";
    refreshDisplay();
}

function setNegative() {
    current = current *(-1);
    refreshDisplay();
}

function setDecimal() {

    if (Number(current) % 1 === 0){
        if (!add){
            current = "0";
        }
        if (current.length >= 10 && add){
            return;
        }
        current = current.toString() + ".";
        add = true;
        refreshDisplay();
    }
}