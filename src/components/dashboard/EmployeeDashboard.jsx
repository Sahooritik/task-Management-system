import React from 'react';
import Header from '../other/Header';
import TaskListNumbers from '../other/taksListNumber/TaskListNumbers';
import TaskList from '../TaskList/TaskList';
const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg=[#icicic]'>
    
       <Header />
       <TaskListNumbers/>
       <TaskList/>

    </div>
  );
};

export default EmployeeDashboard;