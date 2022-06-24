import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Details, Loader } from '../components';
import { fetchBook } from '../store/book.slice';

export const Book = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { book, loading, errors } = useSelector((state) => state.book);

  useEffect(() => {
    dispatch(fetchBook(id));
  }, [dispatch, id]);

  if (loading) return <Loader />;
  if (errors) return <div>Ошибка при загрузке.</div>;

  return (
    <main className='p-2 md:p-4 max-w-7xl mx-auto'>
      <Details
        imgUrl={book?.volumeInfo?.imageLinks?.thumbnail}
        categories={book?.volumeInfo?.categories}
        title={book?.volumeInfo?.title}
        authors={book?.volumeInfo?.authors}
        desc={book?.volumeInfo?.description}
      />
    </main>
  );
};
