import React from 'react';
import { Card } from './Card';

export const BookCard = ({ book }) => {
  const { id, volumeInfo } = book;

  return (
    <Card
      id={id}
      title={volumeInfo.title}
      authors={volumeInfo.authors}
      categories={volumeInfo.categories}
      thumbnail={volumeInfo.imageLinks?.thumbnail}
    />
  );
};
