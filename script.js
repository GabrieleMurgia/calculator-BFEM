

//ELEMENTS
const calculator = document.querySelector(".calc-container")
const display = document.querySelector(".calc-header")
const operation = document.querySelector(".calc-op")

//EVENTS
calculator.addEventListener("click",handleCalculator)

const operations = ['C', '⟵', '÷', 'X', '-', '+', '='];

function handleCalculator(e){
    if(e.target.tagName.toLowerCase() != 'button'){
        return
    }else{
    const value = e.target.innerHTML

    let isOperation = operations.includes(value) ? true : false


    if(operation.innerHTML){
        handleCalculation(value)
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
    let v1 = parseFloat(display.innerHTML);
    let v2 = parseFloat(value)
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

    case 'X':
      res = v1*v2
      break;

    case '-':
      res = v1-v2
      break;

    case '+':
      res = v1+v2
      break;

    case '=':
      break;

    default:
      break;
  }
  return res;
}