

//ELEMENTS
const calculator = document.querySelector(".calc-container")
const display = document.querySelector(".calc-header")
const operation = document.querySelector(".calc-op")
const oldV = document.querySelector(".calc-old-v")

//EVENTS
calculator.addEventListener("click",handleCalculator)

const operations = ['C', '⟵', '÷', 'x', '-', '+', '='];

function handleCalculator(e){
    if(e.target.tagName.toLowerCase() != 'button'){
        return
    }else{
    const value = e.target.innerHTML

    debugger

    let isOperation = operations.includes(value) ? true : false
    if(isOperation && value != '='){
        operation.innerHTML = value
    }
    let op = operation.innerHTML


    if(op && operations.includes(value)){
        if(value == '='){
            handleCalculation(value)
        }else{
            oldV.innerHTML = display.innerHTML
            display.innerHTML = ""
        }   
    }else{
        if(isOperation){
        handleOperation(value)
    }else{
        handleDisplay(value)
    }
    }
    }
}

function handleDisplay(value){

    if(display.innerHTML == '0'){
        display.innerHTML = ""
    }
    display.innerHTML = display.innerHTML + value
}

function handleOperation(op) {
  switch (op) {
    case 'C':
      display.innerHTML = ""
      operation.innerHTML = ""
      break;

    case '⟵':
      if(display.innerHTML.length == 1){
        operation.innerHTML = ""
      }
      display.innerHTML = display.innerHTML.slice(0, -1)
      break;

    default:
      if(display.innerHTML != ""){
        operation.innerHTML = op
      }
  }
}

function handleCalculation(value){
    let v1 = parseFloat(oldV.innerHTML);
    let v2 = parseFloat(display.innerHTML)
    let op = operation.innerHTML


    display.innerHTML = calculateOperation(v1,v2,op)

    operation.innerHTML = ""
}


function calculateOperation(v1,v2,op) {
  let res = 0
  switch (op) {

    case '÷':
      res = v1/v2
      break;

    case 'x':
      res = v1*v2
      break;

    case '-':
      res = v1-v2
      break;

    case '+':
      res = v1+v2
      break;

    default:
      break;
  }
  return res
}