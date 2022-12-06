const text = document.querySelectorAll(".thePaths");

for (let i = 0; i < text.length; i++) {
  console.log(`text number ${i} lenght is ${text[i].getTotalLength()}`);
}

const lastword = document.querySelector("#sixteenth");
const animation = document.querySelector("div.animation");
lastword.addEventListener("animationend", () => {
  animation.style = "transition:all 1.5s ease;opacity:0;pointer-events:none;";
});
