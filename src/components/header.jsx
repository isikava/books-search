import React, { useState } from 'react';
import { Select } from './select';
import { Search } from './search';

const categoriesOptions = [
  'all',
  'art',
  'biography',
  'computers',
  'history',
  'poetry',
];

const sortingOptions = ['relevance ', 'newest'];

export const Header = () => {
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
          <Search />

          {/* Сортинг */}
          <div className='w-full flex mt-2 space-x-1'>
            <div className='flex-1'>
              <Select name='Categories' options={categoriesOptions} />
            </div>
            <div className='flex-1'>
              <Select name='Sorting&nbsp;by' options={sortingOptions} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
