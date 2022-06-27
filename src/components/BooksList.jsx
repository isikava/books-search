import React from 'react';

import { Card } from '.';

export const BooksList = ({ books }) => (
  <section
    className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 
    lg:grid-cols-4 xl:gap-x-8'
  >
    {books?.map((book, i) => (
      <Card
        key={i + book.id}
        id={book.id}
        title={book.volumeInfo?.title}
        authors={book.volumeInfo?.authors}
        categories={book.volumeInfo?.categories}
        thumbnail={book.volumeInfo?.imageLinks?.thumbnail}
      />
    ))}
  </section>
);
