import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '@/features/posts/postSlice';

const Blogspage = () => {
  const { posts, isLoading, isError, error } = useSelector(
    (state) => state.posts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // decide what to render
  let content;

  if (isLoading) {
    content = <h3>Loading...</h3>;
  }

  if (!isLoading && isError) {
    content = <h3>{error}</h3>;
  }

  if (!isLoading && !isError && posts.length === 0) {
    content = <h3>Posts Not Found!</h3>;
  }

  if (!isLoading && !isError && posts.length > 0) {
    content = (
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    );
  }

  return (
    <div className='min-h-screen p-10 bg-gray-100 text-slate-700'>
      <h2 className='max-w-md mx-auto text-center text-2xl font-bold'>Blogs</h2>

      <div className='max-w-md mx-auto mt-10 space-y-5'>{content}</div>
    </div>
  );
};

export default Blogspage;
