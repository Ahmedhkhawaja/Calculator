const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");

const point = document.getElementById("point");
const clear = document.getElementById("clear");
const equals = document.getElementById("equals");
const del = document.getElementById("del");

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const screen = document.getElementById("para");

let expression = "";

function evaluate(value) {
  if (expression.length > 15) {
    expression = "";
    screen.textContent = "LENGTH EXCEEDED"
    return;
  }
  console.log(value);
  expression += value;
  screen.textContent = expression;
}

one.addEventListener(("click"), () => evaluate("1"));
two.addEventListener("click", () => evaluate("2"));
three.addEventListener("click", () => evaluate("3"));
four.addEventListener("click", () => evaluate("4"));
five.addEventListener("click", () => evaluate("5"));
six.addEventListener("click", () => evaluate("6"));
seven.addEventListener("click", () => evaluate("7"));
eight.addEventListener("click", () => evaluate("8"));
nine.addEventListener("click", () => evaluate("9"));
zero.addEventListener("click", () => evaluate("0"));

plus.addEventListener("click", () => evaluate("+"));
minus.addEventListener("click", () => evaluate("-"));
multiply.addEventListener("click", () => evaluate("*"));
divide.addEventListener("click", () => evaluate("/"));
point.addEventListener("click", () => evaluate("."));
equals.addEventListener("click", () => equalsFunc());
del.addEventListener("click", () => backspaceFunc());

document.addEventListener(("keydown"), (event) => {
  const key = event.key;

  if ((key >= "0" && key <= "9") || ["+","-","*","/","."].includes(key)) {
    evaluate(event.key);
  } else if (key === "Enter") {
    equalsFunc();
  } else if (key === "Backspace") {
    backspaceFunc();
  }
});

function equalsFunc () {
  try {
    expression = parseFloat(eval(expression).toFixed(5)).toString();
    screen.textContent = expression;
  } catch {
    screen.textContent = "ERROR";
    expression = "";
  }
};


function backspaceFunc() {
  const len = expression.length;
  if (len == 0) return;
  expression = expression.slice(0,len - 1).toString();
  screen.textContent = expression;
};

clear.addEventListener("click", () => {
  expression = "";
  screen.textContent = "";
});