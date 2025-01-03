import React from 'react'
import Header from '../commonComponents/Header'
import AssignTask from '../commonComponents/AssignTask'
import AllTask from '../commonComponents/AllTask'

const AdminDash = (props) => {
  return (
    <>
    
    <div className='h-screen w-full p-7'>
            <Header changeUser={props.changeUser} />
            <AssignTask  />
            <AllTask />
        </div>


    </>
  )
}

export default AdminDash