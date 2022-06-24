import { createSlice } from '@reduxjs/toolkit';
import { getBookApi } from '../api';

const bookSlice = createSlice({
  name: 'book',
  initialState: {
    book: {},
    loading: false,
    errors: false,
  },
  reducers: {
    getBookStart: (state) => {
      state.loading = true;
    },
    getBookSuccess: (state, { payload }) => {
      state.book = payload;
      state.loading = false;
      state.errors = false;
    },
    getBookFailure: (state) => {
      state.loading = false;
      state.errors = true;
    },
  },
});

export const { getBookStart, getBookSuccess, getBookFailure } =
  bookSlice.actions;

export default bookSlice.reducer;

export const fetchBook = (id) => async (dispatch) => {
  dispatch(getBookStart());
  try {
    const { data } = await getBookApi(id);
    dispatch(getBookSuccess(data));
  } catch (err) {
    dispatch(getBookFailure());
  }
};
