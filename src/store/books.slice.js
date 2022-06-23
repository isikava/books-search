import { createSlice } from '@reduxjs/toolkit';
import { getBooksApi } from '../api';

const booksSlice = createSlice({
  name: 'search',
  initialState: {
    books: [],
    loading: false,
    errors: false,
  },
  reducers: {
    getBooksStart: (state) => {
      state.loading = true;
    },
    getBooksSuccess: (state, { payload }) => {
      state.books.push(...payload);
      state.loading = false;
      state.errors = false;
    },
    getBooksFailure: (state) => {
      state.loading = false;
      state.errors = true;
    },
    clearBooks: (state) => {
      state.books = [];
      state.loading = false;
      state.errors = false;
    },
  },
});

export const { getBooksStart, getBooksSuccess, getBooksFailure, clearBooks } =
  booksSlice.actions;

export default booksSlice.reducer;

export const fetchBooks =
  (query, subject, orderBy, index, maxResults) => async (dispatch) => {
    dispatch(getBooksStart());
    try {
      const { data } = await getBooksApi(
        query,
        subject,
        orderBy,
        index,
        maxResults
      );
      if (!data) return;
      dispatch(getBooksSuccess(data.items));
    } catch (err) {
      dispatch(getBooksFailure());
    }
  };
