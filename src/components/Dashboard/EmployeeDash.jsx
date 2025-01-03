import React from 'react'
import Header from '../commonComponents/Header'
import TaskDisplay from '../commonComponents/TaskDisplay'
import TaskList from '../TaskList/TaskList'


const EmployeeDash = (props) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskDisplay data={props.data} />
        <TaskList data={props.data} />
    </div>
  )
}

export default EmployeeDash