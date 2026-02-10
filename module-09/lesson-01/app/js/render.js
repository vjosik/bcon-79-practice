import { createNote } from "./create.js";
import { loadLS } from "./load.js";
import { STORAGE_KEY } from "./values.js";
import { store } from "./store.js";
import refs from "./referentsEl.js";

export function renderNotes(notes = []) {
  if (notes === undefined) {
    return;
  }
  const markup = notes.map(createNote).join("");
  refs.noteList.innerHTML = markup;
}

const notesData = loadLS(STORAGE_KEY.notes);
if (notesData !== undefined) {
  store.notes = [...notesData];
  renderNotes(notesData);
}
