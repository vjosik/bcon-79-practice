import referents from "./js/referentsEl.js";
import { setTheme } from "./js/theme.js";
import { STORAGE_KEY } from "./js/values.js";
import { onFormSubmit } from "./js/submit-form.js";
import { onBtnDeleteClick } from "./js/deletebtn.js";
import { onTogglerClick } from "./js/theme.js";
import { store } from "./js/store.js";
import { loadLS } from "./js/load.js";


setTheme(loadLS(STORAGE_KEY.appsTheme));

referents.form.addEventListener("submit", onFormSubmit);
referents.noteList.addEventListener("click", onBtnDeleteClick);
referents.themeTogl.addEventListener("click", onTogglerClick);
