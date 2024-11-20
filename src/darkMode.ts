const themeToggle = document.getElementById(
  "theme-toggle"
) as HTMLButtonElement;
const body = document.body;

const updateTheme = () => {
  const isLight = body.classList.contains("theme-light");
  body.classList.toggle("theme-light", !isLight);
  body.classList.toggle("theme-dark", isLight);
  themeToggle.textContent = isLight ? "🌞" : "🌙";
  localStorage.setItem("theme", isLight ? "dark" : "light");
};

// Initialize theme from localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("theme-dark");
  body.classList.remove("theme-light");
  themeToggle.textContent = "🌞";
} else {
  body.classList.add("theme-light");
  body.classList.remove("theme-dark");
  themeToggle.textContent = "🌙";
}

// Attach event listener
themeToggle.addEventListener("click", updateTheme);
