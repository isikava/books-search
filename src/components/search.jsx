import React from 'react';
import { IoSearch } from 'react-icons/io5';

export const Search = ({ value, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className='w-full '>
      <div className='relative text-gray-800'>
        <input
          className='block p-2 w-full bg-gray-50 border border-gray-300
          focus:ring-blue-500 focus:border-blue-500'
          type='text'
          placeholder='Search for...'
          value={value}
          onChange={onChange}
        />
        <button
          type='submit'
          className='absolute right-1 bottom-0.5 text-3xl 
          p-1 focus:ring-4 
          focus:outline-none focus:ring-blue-300 
          font-medium rounded-xl'
        >
          <IoSearch />
        </button>
      </div>
    </form>
  );
};
