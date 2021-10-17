// the buttons 

let optionButtons = document.querySelectorAll('.option-button');
let optionContents = document.querySelectorAll('.option-content');

for (let i = 0; i < optionButtons.length; i++) {
  optionButtons[i].onclick = function() {
    
    for (let j = 0; j < optionContents.length; j++) {
      if (i === j) {
        optionContents[j].classList.remove('hidden');
        optionButtons[j].disabled = true;
      } else {
        optionContents[j].classList.add('hidden');
        optionButtons[j].disabled = false;
      }
    }
  }
}

let contentFirst = document.querySelector('.content-first');
let contentSecond = document.querySelector('.content-second');
let contentThird = document.querySelector('.content-third');
let contentForth = document.querySelector('.content-forth');

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