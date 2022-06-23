import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './search.slice';
import booksReducer from './books.slice';

export default configureStore({
  reducer: {
    search: searchReducer,
    books: booksReducer,
  },
});
