import axios from 'axios';

const baseUrl = 'https://www.googleapis.com/books/v1';

export const getBooksApi = async (
  query,
  subject,
  orderBy,
  index,
  maxResults
) => {
  if (subject !== 'All')
    return await axios.get(
      `${baseUrl}/volumes?q=${query}+subject:${subject}&orderBy=${orderBy}&startIndex=${index}&maxResults=${maxResults}`
    );
  return await axios.get(
    `${baseUrl}/volumes?q=${query}&orderBy=${orderBy}&startIndex=${index}&maxResults=${maxResults}`
  );
};
