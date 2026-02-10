import { saveLS } from "./save.js";
import refs from "./referentsEl.js";
import { store } from "./store.js";
import { STORAGE_KEY } from "./values.js";

export function setTheme(theme) {
  const currentTheme = theme ?? "light";
  currentTheme === "light"
    ? refs.themeTogl
    : refs.themeTogl.setAttribute("checked", "");
  refs.themeTogl.value = currentTheme;
  document.documentElement.setAttribute("data-bs-theme", currentTheme);
  store.appsTheme = currentTheme;
}
export function onTogglerClick(event) {
  const currentTheme = store.appsTheme === "light" ? "dark" : "light";
  setTheme(currentTheme);
  saveLS(STORAGE_KEY.appsTheme, currentTheme);
}
