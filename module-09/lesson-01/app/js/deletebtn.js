import { saveLS } from "./save.js";
import { store } from "./store.js";
import { STORAGE_KEY } from "./values.js";
import { renderNotes } from "./render.js";

export function onBtnDeleteClick(event) {
  const currEl = event.target;
  if (!currEl.classList.contains("js-delete-btn")) {
    return;
  }
  const noteId = currEl.dataset.noteid;
  const filteredNotes = store.notes.filter(note => {
    return note.id !== noteId;
  });
  store.notes = [...filteredNotes];
  saveLS(STORAGE_KEY.notes, store.notes);
  renderNotes(store.notes);
}
