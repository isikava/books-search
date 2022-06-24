import React from 'react';
import { Link } from 'react-router-dom';

export const Card = ({ id, title, authors, categories, thumbnail }) => {
  return (
    <div className='w-full p-6 overflow-hidden bg-slate-200'>
      <div className='flex flex-col items-center'>
        <Link to={id} className='w-1/2 flex items-center justify-center'>
          {thumbnail && (
            <img
              src={thumbnail}
              alt={title}
              className='w-full hover:scale-110 
              transition ease-in-out shadow-xl'
            />
          )}
        </Link>
        <div className='w-full mt-4'>
          {categories && (
            <span className='text-gray-500 underline'>{categories}</span>
          )}
          {title && <h2 className='text-xl font-semibold mt-4'>{title}</h2>}
          {authors && (
            <span className='text-gray-500 mt-4'>{authors.join(', ')}</span>
          )}
        </div>
      </div>
    </div>
  );
};
