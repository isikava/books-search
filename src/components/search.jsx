import React, { useState } from 'react';
import { IoClose, IoSearch } from 'react-icons/io5';

export const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className='w-full '>
      <div className='relative text-gray-900'>
        {searchQuery}
        <input
          className='block p-2 w-full bg-gray-50 border border-gray-300
          focus:ring-blue-500 focus:border-blue-500'
          type='search'
          placeholder='Search for...'
          value={searchQuery}
          onChange={handleChange}
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

// <form className='w-full flex bg-white' onSubmit={handleSubmit}>
//   <input
//     type='Search'
//     placeholder='Search for...'
//     className='w-full p-1 text-gray-900'
//     value={searchQuery}
//     onChange={handleChange}
//   />
//   <button type='submit' className='text-xl text-gray-900'>
//     <IoSearch />
//   </button>
// </form>
