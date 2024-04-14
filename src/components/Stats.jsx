const Stats = ({ totalCount }) => {
  return (
    <div className='p-4 h-40 flex flex-col items-center justify-center space-y-5 bg-white rounded shadow'>
      <h3 className='text-2xl font-semibold'>Total count: {totalCount}</h3>
    </div>
  );
};

export default Stats;
