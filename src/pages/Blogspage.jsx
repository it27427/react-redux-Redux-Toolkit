import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '@/features/posts/postSlice';

const Blogspage = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className='min-h-screen p-10 bg-gray-100 text-slate-700'>
      <h2 className='max-w-md mx-auto text-center text-2xl font-bold'>Blogs</h2>

      <div className='max-w-md mx-auto mt-10 space-y-5'></div>
    </div>
  );
};

export default Blogspage;
