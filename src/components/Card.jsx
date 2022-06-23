import React from 'react';

export const Card = ({ title, image }) => {
  return (
    <div className='w-full h-40 bg-slate-500'>
      <div className='w-full'>{image && <img src={image} />}</div>
      {title}
    </div>
  );
};
