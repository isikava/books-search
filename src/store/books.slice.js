import { createSlice } from '@reduxjs/toolkit';
import { getBooksApi } from '../api';

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    total: null,
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
    setTotal: (state, { payload }) => {
      state.total = payload;
    },
    clearBooks: (state) => {
      state.books = [];
      state.total = null;
      state.loading = false;
      state.errors = false;
    },
  },
});

export const {
  getBooksStart,
  getBooksSuccess,
  getBooksFailure,
  setTotal,
  clearBooks,
} = booksSlice.actions;

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
      dispatch(getBooksSuccess(data.items));
    } catch (err) {
      dispatch(getBooksFailure());
    }
  };
