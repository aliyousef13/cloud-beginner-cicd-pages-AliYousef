const out = document.getElementById("out");
const runBtn = document.getElementById("run");
const clearBtn = document.getElementById("clear");
const modeBtn = document.getElementById("mode");
document.getElementById("year").textContent = new Date().getFullYear();

function stamp(){
  const d = new Date();
  return d.toLocaleTimeString([], {hour:"2-digit", minute:"2-digit", second:"2-digit"});
}

function line(t){
  out.textContent += `\n[${stamp()}] ${t}`;
}

runBtn.addEventListener("click", () => {
  
  out.textContent = "[ready] starting demo...";
  line("push detected on main");
  setTimeout(()=> line("checkout repository"), 300);
  setTimeout(()=> line("check required files: OK"), 650);
  setTimeout(()=> line("upload pages artifact"), 950);
  setTimeout(()=> line("deploy to GitHub Pages: SUCCESS ✅"), 1300);
});

clearBtn.addEventListener("click", () => {
  out.textContent = "ready...";
});

modeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

