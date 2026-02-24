document.getElementById("btn").addEventListener("click", () => {
  const msg = document.getElementById("msg");
  msg.innerText = "Hello from JavaScript! The button works ✅";

  const t = new Date();
  document.getElementById("time").innerText =
    "Last interaction: " + t.toLocaleString();
});