// the buttons that need refactoring

let buttonFirst = document.getElementById('button-first');
let buttonSecond = document.getElementById('button-second');
let buttonThird = document.getElementById('button-third');
let buttonForth = document.getElementById('button-forth');

let contentFirst = document.querySelector('.content-first');
let contentSecond = document.querySelector('.content-second');
let contentThird = document.querySelector('.content-third');
let contentForth = document.querySelector('.content-forth');

buttonFirst.onclick = function() {
    contentFirst.classList.remove('hidden');
    contentSecond.classList.add('hidden');
    contentThird.classList.add('hidden');
    contentForth.classList.add('hidden');
}

buttonSecond.onclick = function() {
    contentFirst.classList.add('hidden');
    contentSecond.classList.remove('hidden');
    contentThird.classList.add('hidden');
    contentForth.classList.add('hidden');
}

buttonThird.onclick = function() {
    contentFirst.classList.add('hidden');
    contentSecond.classList.add('hidden');
    contentThird.classList.remove('hidden');
    contentForth.classList.add('hidden');
}

buttonForth.onclick = function() {
    contentFirst.classList.add('hidden');
    contentSecond.classList.add('hidden');
    contentThird.classList.add('hidden');
    contentForth.classList.remove('hidden');
}
// the third option toggle

let toggleThird = document.getElementById('toggle-third');
    toggleThird.onclick = function() {
        contentThird.classList.toggle("dark");
    };


// the forth option

let btnRebel = document.getElementById("rebel");
let btnRepublic = document.getElementById("republic");
let mode = localStorage.getItem("mode");

let chooseLightSide = () => {
  contentForth.classList.add("light");
  contentForth.classList.remove("dark");
  localStorage.setItem("mode", "light");
};
const chooseDarkSide = () => {
    contentForth.classList.add("dark");
    contentForth.classList.remove("light");
    localStorage.setItem("mode", "dark");
};
const chooseSide = () => {
  contentForth.classList.remove("light");
  contentForth.classList.remove("dark");
  localStorage.setItem("mode", "choose");
};

if (mode === "light") {
  chooseLightSide();
} else if (mode === "dark") {
  chooseDarkSide();
} else {
  localStorage.setItem("mode", "choose");
}

btnRebel.addEventListener("click", () => {
  mode = localStorage.getItem("mode");
  mode === "choose" ? chooseLightSide() : chooseSide();
});
btnRepublic.addEventListener("click", () => {
  mode = localStorage.getItem("mode");
  mode === "choose" ? chooseDarkSide() : chooseSide();
});