

// SET THEME BY GIVING ROOT CLASS NAME
let setTheme = (theme) => (document.documentElement.className = theme);

// ASSIGN DROP DOWN TO A VARIABLE
const themeDropDown = document.getElementById("theme_select");

// SET THEME ON SELECT OF DROPDOWN OPTION
themeDropDown.addEventListener("change", function () {
  setTheme(this.value);

  // STORE SELECTED THEME ON LOCAL STORAGE
  localStorage.setItem("theme", themeDropDown.value);
});

// GET STORED THEME & APPLY WHEN NEW PAGE LOADS
const storedTheme = localStorage.getItem("theme");
window.onload = setTheme(storedTheme);
