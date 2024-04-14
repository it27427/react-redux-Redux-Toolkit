export const getPosts = async () => {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const response = await fetch(url);
  return response.json();
};
