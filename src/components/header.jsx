import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  // Локальный инпут, который передается в стор на onSubmit
  const [input, setInput] = useState('');
  const { category, sortBy } = useSelector((state) => state.search);

  const handleCategoryChange = (e) => {
    dispatch(setCategory(e.target.value));
  };

  const handleSortChange = (e) => {
    dispatch(setSort(e.target.value));
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // передача локального инпута в глобальный
    dispatch(setQuery(input));
    setInput('');
  };

  return (
    <header className='bg-slate-500 text-white p-2 sm:p-6'>
      <div className='max-w-2xl mx-auto'>
        <div className='flex flex-col items-center'>
          <h1
            className='hidden sm:block text-white mb-2
            text-3xl md:text-4xl font-bold'
          >
            Search for books
          </h1>
          {/* Поиск */}
          <Search
            value={input}
            onChange={handleInputChange}
            onSubmit={handleSubmit}
          />

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
