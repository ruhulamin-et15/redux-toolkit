import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../features/books/BooksSlice";

const store = configureStore({
    reducer: {
        booksReducer: booksReducer,
    }
});

export default store;