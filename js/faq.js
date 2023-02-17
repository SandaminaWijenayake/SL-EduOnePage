const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    questionRemove();
    question.classList.add("activate");
  });
});

function questionRemove() {
  questions.forEach((question) => {
    question.classList.remove("activate");
  });
}
