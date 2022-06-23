import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MoonLoader from 'react-spinners/MoonLoader';
import { Card } from './Card';

import { fetchBooks, clearBooks } from '../store/books.slice';

export const Books = () => {
  const dispatch = useDispatch();
  // index нужен для пагинации и загрузки load more
  const [index, setIndex] = useState(0);
  // количество ответов в запросе
  const maxResults = 30;

  const { query, category, sortBy } = useSelector((state) => state.search);
  const { books, loading, error } = useSelector((state) => state.books);

  // смена категории или сортировки
  useEffect(() => {
    dispatch(clearBooks());
    setIndex(0);
  }, [category, sortBy, dispatch]);

  // запрос
  useEffect(() => {
    if (query.trim() === '') return;

    dispatch(fetchBooks(query, category, sortBy, index, maxResults));
  }, [dispatch, query, category, sortBy, index, maxResults]);

  return (
    <main className='bg-neutral-400 p-4'>
      <section className='flex flex-wrap sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {books?.map((book, i) => (
          <Card key={i} title={book.volumeInfo.title} />
        ))}
        <div
          id='load more'
          className='flex items-center justify-center w-full h-full'
        >
          {loading && <MoonLoader size={20} />}
          {!loading && !error && books.length > 0 && (
            <button onClick={() => setIndex((prev) => prev + maxResults)}>
              Load more...
            </button>
          )}
        </div>
      </section>
    </main>
  );
};
