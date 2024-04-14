import Counter from '@/components/Counter';
import Stats from '@/components/Stats';

const HomePage = () => {
  return (
    <div className='min-h-screen p-10 bg-gray-100 text-slate-700'>
      <h1 className='max-w-md mx-auto text-center text-2xl font-bold'>
        Counter Application
      </h1>

      <div className='max-w-md mx-auto mt-10 space-y-5'>
        <Counter />
        <Counter />
        <Stats totalCount={10} />
      </div>
    </div>
  );
};

export default HomePage;
