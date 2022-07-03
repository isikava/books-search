import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Select } from './Select';
import { Search } from './Search';

import {
  categoriesOptions,
  sortingOptions,
  setCategory,
  setSort,
  setQuery,
} from '../store/search.slice';

export const Header = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const inputRef = useRef();
  const { category, sortBy } = useSelector((state) => state.search);

  const handleCategoryChange = (e) => {
    dispatch(setCategory(e.target.value));
  };

  const handleSortChange = (e) => {
    dispatch(setSort(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setQuery(inputRef.current.value));
    navigate('/', { replace: true });
    inputRef.current.value = '';
  };

  return (
    <header
      className='text-white p-2 sm:p-6 
    bg-gradient-to-r from-stone-900 via-slate-800 to-indigo-800'
    >
      <div className='max-w-2xl mx-auto'>
        <div className='flex flex-col items-center'>
          <h1
            className='hidden sm:block text-white mb-2
            text-3xl md:text-4xl font-bold'
          >
            Search for books
          </h1>
          {/* Поиск */}
          <Search inputRef={inputRef} onSubmit={handleSubmit} />

          {/* Сортировка */}
          <div className='w-full flex mt-2 space-x-3'>
            <div className='flex-1'>
              <Select
                name='Categories'
                options={Object.values(categoriesOptions)}
                onChange={handleCategoryChange}
                value={category}
              />
            </div>
            <div className='flex-1'>
              <Select
                name='Sorting&nbsp;by'
                options={Object.values(sortingOptions)}
                onChange={handleSortChange}
                value={sortBy}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
