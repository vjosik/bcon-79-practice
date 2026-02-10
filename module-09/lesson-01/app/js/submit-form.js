import { saveLS } from "./save.js";
import { g, STORAGE_KEY } from "./values.js";
import { store } from "./store.js";
import refs from "./referentsEl.js";
import { createNote } from "./create.js";

export function onFormSubmit(event) {
  event.preventDefault();

  const form = event.target;

  const notesData = {
    id: g.generate(10),
    ...Object.fromEntries(new FormData(form)),
  };
  // console.log(notesData);

  //Add new items in form
  store.notes = [...store.notes, notesData];
  saveLS(STORAGE_KEY.notes, store.notes);

  // insert markup in list
  refs.noteList.insertAdjacentHTML("beforeend", createNote(notesData));

  //reset form
  form.reset();
}
