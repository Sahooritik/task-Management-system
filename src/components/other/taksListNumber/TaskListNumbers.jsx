import React from 'react';

const TaskListNumbers = () => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen '>
      <div className='p-10 rounded-xl py-6 px-9 bg-blue-400 w-[45%] '  >
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
     </div>
      <div className='p-10 rounded-xl py-6 px-9 bg-green-400 w-[45%] '  >
        <h2 className='text-2xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>Completed</h3>
     </div>
      <div className='p-10 rounded-xl py-6 px-9 bg-yellow-400 w-[45%] '  >
        <h2 className='text-2xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>Accepted</h3>
     </div>
      <div className='p-10 rounded-xl py-6 px-9 bg-red-400 w-[45%] '  >
        <h2 className='text-2xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>Failed</h3>
     </div> 
    </div>
  );
};

export default TaskListNumbers;