import React from 'react';

export const Select = ({ name, options, value, onChange }) => {
  return (
    <div className='py-2 flex flex-col sm:flex-row sm:items-center'>
      <label htmlFor={name} className='block mb-1 mr-1 text-lg'>
        {name}
      </label>
      <select
        name={name}
        id={name}
        className='w-full bg-gray-50 border border-gray-300 
          text-gray-900 text-md block p-2
          focus:ring-blue-500 focus:border-blue-500'
        onChange={onChange}
        value={value}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
