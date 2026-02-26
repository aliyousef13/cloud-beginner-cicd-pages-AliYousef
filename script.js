const actionBtn = document.getElementById("actionBtn");
const themeBtn = document.getElementById("themeBtn");
const message = document.getElementById("message");
const time = document.getElementById("time");

actionBtn.addEventListener("click", function () {
  const now = new Date();

  message.textContent =
    "Pipeline event executed successfully! GitHub Actions checked the files and deployed the website.";
  time.textContent = "Last update: " + now.toLocaleString();
});

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
});

