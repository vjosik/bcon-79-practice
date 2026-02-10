import { renderCategories } from "../render/categories";
import { renderBooks } from "../render/renderBooks";
import { fetchBookCategories } from "../services/fetchBookCategories";
import { fetchBooks } from "../services/fetchBooks";

import refs from "./refs";

export function initCategorys() {
  fetchBookCategories().then(data => {
    return renderCategories(data, refs.categoryList);
  });
}

export function initBooks() {
  fetchBooks().then(data => {
    return renderBooks(data, refs.booksList);
  });
}
