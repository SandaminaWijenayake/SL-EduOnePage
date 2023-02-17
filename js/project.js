const namee = document.getElementById("namee");
const email = document.getElementById("email");
const project = document.getElementById("project");
const budget = document.getElementById("budget");
const textarea = document.getElementById("textarea");
const submit = document.getElementById("submit");
const form = document.getElementById("form");
const name_error = document.getElementById("name_error");
const email_error = document.getElementById("email_error");
const project_error = document.getElementById("project_error");
const budget_error = document.getElementById("budget_error");
const textarea_error = document.getElementById("textarea_error");

submit.addEventListener("click", onButtonClicked);
function onButtonClicked(e) {
  if (
    namee.value === "" ||
    namee.value == null ||
    email.value === "" ||
    email.value == null ||
    project.value === "" ||
    project.value == null ||
    budget.value === "" ||
    budget.value == null
  ) {
    e.preventDefault();
  }

  if (namee.value === "" || namee.value == null) {
    name_error.innerText = "Name is required";
  } else {
    name_error.innerHTML = "";
  }

  if (email.value === "" || email.value == null) {
    email_error.innerText = "Email is required";
  } else {
    email_error.innerHTML = "";
  }

  if (project.value === "" || project.value == null) {
    project_error.innerText = "Course type is required";
  } else {
    project_error.innerHTML = "";
  }

  if (budget.value === "" || budget.value == null) {
    budget_error.innerText = "Date is required";
  } else {
    budget_error.innerHTML = "";
  }

  if (budget.value === a || budget.value == null) {
    message.push("budget is required");
  }
}
