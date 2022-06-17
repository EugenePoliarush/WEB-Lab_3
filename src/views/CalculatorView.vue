<template>
  <div class="CalculatorView">
          <div class="container-fluid" id="calculator">
              <!-- Screen and clear key -->
              <div class="container-fluid m-0 p-0 top">
                  <button class="clear">C</button>
                  <div class="container-fluid m-0 p-0 screen"></div>
              </div>
              
              <div class="keys">
                  <!-- operators and other keys -->
                  <button>7</button>
                  <button>8</button>
                  <button>9</button>
                  <button class="operator">+</button>
                  <button>4</button>
                  <button>5</button>
                  <button>6</button>
                  <button class="operator">-</button>
                  <button>1</button>
                  <button>2</button>
                  <button>3</button>
                  <button class="operator">÷</button>
                  <button>0</button>
                  <button>.</button>
                  <button class="eval">=</button>
                  <button class="operator">x</button>
              </div>
          </div>
        </div>
</template>

<script>
  export default {
	name: 'CalculatorView',
	mounted() {
	document.title = 'Calculator';
	let keys = document.querySelectorAll('#calculator button');
	let operators = ['+', '-', 'x', '÷'];
	let decimalAdded = false;

	for(let i = 0; i < keys.length; i++) {
		keys[i].onclick = function(e) {
			let input = document.querySelector('.screen');
			let inputVal = input.innerHTML;
			let btnVal = this.innerHTML;
			
			if(btnVal == 'C') {
				input.innerHTML = '';
				decimalAdded = false;
			}
			
			else if(btnVal == '=') {
				let equation = inputVal;
				let lastChar = equation[equation.length - 1];
				
				equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
				
				if(operators.indexOf(lastChar) > -1 || lastChar == '.')
					equation = equation.replace(/.$/, '');
				
				if(equation)
					input.innerHTML = eval(equation);
					
				decimalAdded = false;
			}
			
			else if(operators.indexOf(btnVal) > -1) {

				let lastChar = inputVal[inputVal.length - 1];
				
				if(inputVal != '' && operators.indexOf(lastChar) == -1) 
					input.innerHTML += btnVal;
				
				else if(inputVal == '' && btnVal == '-') 
					input.innerHTML += btnVal;
				
				if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) 
				{
					input.innerHTML = inputVal.replace(/.$/, btnVal);
				}
				
				decimalAdded =false;
			}
			
			else if(btnVal == '.') {
				if(!decimalAdded) {
					input.innerHTML += btnVal;
					decimalAdded = true;
				}
			}
			
			else {
				input.innerHTML += btnVal;
			}
			
			e.preventDefault();
		} 
	}
	}
}
</script>

<style>
.center {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

#calculator {
width: 325px;
height: auto;

margin: 100px auto;
padding: 20px 20px 9px;

background: #9dd2ea;
background: linear-gradient(#9dd2ea, #8bceec);
border-radius: 3px;
box-shadow: 0px 4px #009de4, 0px 10px 15px rgba(0, 0, 0, 0.2);
}

/* Top portion */
.top button.clear {
float: left;
}

/* Inset shadow on the screen to create indent */
.top .screen {
height: 40px;
width: 74%;

float: right;

padding: 0 10px;

background: rgba(0, 0, 0, 0.2);
border-radius: 3px;
box-shadow: inset 0px 4px rgba(0, 0, 0, 0.2);

/* Typography */
font-size: 17px;
line-height: 40px;
color: white;
text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
text-align: right;
letter-spacing: 1px;
}

/* Clear floats */
.keys, .top {overflow: hidden;}

/* Applying same to the keys */
.keys button, .top button.clear {
float: left;
position: relative;
top: 0;

cursor: pointer;

width: 66px;
height: 36px;

background: white;
border-radius: 3px;
box-shadow: 0px 4px rgba(0, 0, 0, 0.2);

margin: 0 7px 11px 0;

color: #888;
line-height: 36px;
text-align: center;

/* prevent selection of text inside keys */
user-select: none;

/* Smoothing out hover and active states using css3 transitions */
transition: all 0.2s ease;
}

/* Remove right margins from operator keys */
/* style different type of keys (operators/evaluate/clear) differently */
.keys button.operator {
background: #FFF0F5;
margin-right: 0;
}

.keys button.eval {
background: #f1ff92;
box-shadow: 0px 4px #9da853;
color: #888e5f;
}

.top button.clear {
background: #ff9fa8;
box-shadow: 0px 4px #ff7c87;
color: white;
  border: 0;
}

/* Some hover effects */
.keys button:hover {
background: #9c89f6;
box-shadow: 0px 4px #6b54d3;
color: white;
}

.keys button.eval:hover {
background: #abb850;
box-shadow: 0px 4px #717a33;
color: #ffffff;
}

.top button.clear:hover {
background: #f68991;
box-shadow: 0px 4px #d3545d;
color: white;
}

/* Simulating "pressed" effect on active state of the keys by removing the box-shadow and moving the keys down a bit */
.keys button:active {
box-shadow: 0px 0px #6b54d3;
top: 4px;
}

.keys button.eval:active {
box-shadow: 0px 0px #717a33;
top: 4px;
}

.top button.clear:active {
top: 4px;
box-shadow: 0px 0px #d3545d;
}
</style>