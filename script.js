const countElement = document.querySelector(".count");

console.log(countElement);
let count = 0;
countElement.innerText = count;
function increase() {
  count += 1;
  // count = count + 1;
  countElement.innerText = count;
}
function decrease() {
  if (count > 0) {
    count -= 1;
    // count = count - 1;
  }
  countElement.innerText = count;
}
function reset() {
  count = 0;
  countElement.innerText = count;
}
