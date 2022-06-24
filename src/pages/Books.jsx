import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BookCard, Loader } from '../components';
import { fetchBooks, clearBooks } from '../store/books.slice';

export const Books = () => {
  const dispatch = useDispatch();
  // index нужен для пагинации и загрузки load more
  const [index, setIndex] = useState(0);
  // количество ответов в запросе
  const maxResults = 30;

  const { query, category, sortBy } = useSelector((state) => state.search);
  const { books, total, loading, errors } = useSelector((state) => state.books);

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
    <main className='p-2 md:p-4 max-w-7xl mx-auto'>
      <div className='mb-6 text-center'>
        {total && <span className='text-xl'>Found {total} results</span>}
      </div>
      <section
        className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 
        lg:grid-cols-4 xl:gap-x-8'
      >
        {books?.map((book, i) => (
          <BookCard key={i} book={book} />
        ))}
      </section>
      <div
        id='load more'
        className='flex items-center justify-center w-full h-full my-4'
      >
        {loading && <Loader />}
        {errors && <div>Ошибка при загрузке.</div>}
        {!loading && !errors && books.length > 0 && (
          <button
            className='px-4 py-2 bg-green-500 
              text-white text-lg rounded-md'
            onClick={() => setIndex((prev) => prev + maxResults)}
          >
            Load more...
          </button>
        )}
      </div>
    </main>
  );
};
