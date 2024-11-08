const equal = document.querySelector("p.equal");
const notEqual = document.querySelector("p.not-equal");
const strictEqual = document.querySelector("p.strict-equal");
const strictNotEqual = document.querySelector("p.strict-not-equal");
const greaterThan = document.querySelector("p.greater-than");
const greaterThanOrEqual = document.querySelector("p.greater-than-or-equal");
const lessThan = document.querySelector("p.less-than");
const lessThanOrEqual = document.querySelector("p.less-than-or-equal");

const num1 = 3;
const num2 = 4;

if (num1 == "3" && num1 == 3 && 3 == "3") {
  equal.innerHTML = " == : 값만 같다면 true 반환";
}
if (num1 != 4 && num2 != "3") {
  notEqual.innerHTML = " != : 값만 다르다면 true 반환";
}
if (num1 === 3 && num2 === 4) {
  strictEqual.innerHTML = " === : 값과 타입 모두 같다면 true 반환";
}
if (num1 !== 4 && num1 !== "3") {
  strictNotEqual.innerHTML = " !== : 값이나 타입이 다르다면 true 반환";
}
if (num1 > 2 && num2 > num1) {
  greaterThan.innerHTML =
    " > : 왼쪽 피연산자가 오른쪽 피연산자보다 크면 true를 반환";
}
if (num1 >= 3 && num1 >= "2") {
  greaterThanOrEqual.innerHTML =
    " >= : 왼쪽 피연산자가 오른쪽 피연산자와 같거나 크면 true를 반환";
}
if (num1 < 4 && num1 < num2) {
  lessThan.innerHTML =
    " < : 왼쪽 피연산자가 오른쪽 피연산자보다 작으면 true를 반환";
}
if (num1 <= 4 && num2 <= 4) {
  lessThanOrEqual.innerHTML =
    " <= : 왼쪽 피연산자가 오른쪽 피연산자와 같거나 작으면 true를 반환";
}
