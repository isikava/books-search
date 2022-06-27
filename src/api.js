import axios from 'axios';

const baseUrl = 'https://www.googleapis.com/books/v1';
const API_KEY = 'AIzaSyDvI6XisfJCEcKm3zL-X9lGZqIVJzXQy18';

export const getBooksApi = async (
  query,
  subject,
  orderBy,
  index,
  maxResults
) => {
  const url =
    subject !== 'All'
      ? `${baseUrl}/volumes?q=${query}+subject:${subject}&key=${API_KEY}&orderBy=${orderBy}&startIndex=${index}&maxResults=${maxResults}`
      : `${baseUrl}/volumes?q=${query}&key=${API_KEY}&orderBy=${orderBy}&startIndex=${index}&maxResults=${maxResults}`;

  return await axios.get(encodeURI(url));
};

export const getBookApi = async (id) =>
  await axios.get(
    `${baseUrl}/volumes/${id}?fields=id,volumeInfo(title,imageLinks,authors,categories,description)&key=${API_KEY}`
  );
