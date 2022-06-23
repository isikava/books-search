import { createSlice } from '@reduxjs/toolkit';

// опции селектов
export const categoriesOptions = {
  All: 'All',
  Art: 'Art',
  Biography: 'Biography',
  Computers: 'Computers',
  Poetry: 'Poetry',
  History: 'History',
};

export const sortingOptions = {
  relevance: 'relevance',
  newest: 'newest',
};

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    query: '',
    category: categoriesOptions.All,
    sortBy: sortingOptions.relevance,
  },
  reducers: {
    setQuery: (state, { payload }) => {
      state.query = payload;
    },
    setCategory: (state, { payload }) => {
      state.category = payload;
    },
    setSort: (state, { payload }) => {
      state.sortBy = payload;
    },
  },
});

export const { setQuery, setCategory, setSort } = searchSlice.actions;

export default searchSlice.reducer;
