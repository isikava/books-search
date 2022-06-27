import React from 'react';

export const Details = ({ imgUrl, categories, title, authors, desc }) => {
  return (
    <section className='flex flex-col md:flex-row'>
      {/* Left block*/}
      <div className='py-6 md:py-12 h-fit flex-auto flex items-center justify-center bg-slate-200'>
        <div className='w-3/5 flex items-center justify-center'>
          {imgUrl && (
            <img className='w-full drop-shadow-2xl' src={imgUrl} alt={title} />
          )}
        </div>
      </div>
      {/* Right block Content */}
      <div className='w-full md:w-3/5 p-2 md:p-10 space-y-4'>
        {categories && <span className='text-gray-700'>{categories}</span>}
        {title && <h1 className='text-2xl'>{title}</h1>}
        {authors && (
          <p className='text-gray-500 underline'>{authors.join(', ')}</p>
        )}
        {desc && <p dangerouslySetInnerHTML={{ __html: desc }}></p>}
      </div>
    </section>
  );
};
