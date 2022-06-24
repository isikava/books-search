import React from 'react';
import { MoonLoader } from 'react-spinners';

export const Loader = () => {
  return (
    <div className='p-4 flex items-center justify-center w-full h-full'>
      <MoonLoader size={30} />
    </div>
  );
};
