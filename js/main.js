
/*----- constants -----*/

/*----- app's state (variables) -----*/
var counterNum = parseFloat(counter);
var inputNum = parseFloat(input);

/*----- cached element references -----*/
var counter = document.querySelector('h1').textContent;
console.log(counter);
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var input = document.querySelector('input').value;
console.log(input);

/*----- event listeners -----*/
plus.addEventListener('click', add);
minus.addEventListener('click', subtract);
/*----- functions -----*/

function add() {
    counter.textContent = (counterNum + inputNum);
}

function subtract() {

}


console.log(counterNum);
console.log(inputNum);