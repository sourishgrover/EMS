import React from 'react'

const AssignTask = () => {
  return (
    <div className=' border border-yellow-600 px-5 py-4 mt-10 rounded '>
    <form 
    className='flex items-start flex-wrap w-full justify-between'
    >
       
       <div className='w-1/2'>
           <div>
           <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
           <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Enter Your title' />
           </div>
              
              <div>

              <h3  className='text-sm text-gray-300 mb-0.5'>Date</h3>
              <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 text-gray-400' type="date" />
              </div>

              <div>
              <h3 className='text-sm text-gray-300 mb-0.5'>Assignd to</h3>
              <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 text-gray-400' type="text" placeholder='Enter Name' />

              </div>
                   
                   <div>
              <h3 className='text-sm text-gray-300 mb-0.5'>
                Catagory
              </h3>
              <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4 text-gray-400' type="text" placeholder='Dev,Creative...' />

                   </div>

       </div>
          

       <div className=' w-2/5 flex flex-col items-start '>

        <h2 className='text-sm text-gray-300 mb-0.5'>Description</h2>
        <textarea className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id=""></textarea>

        <button className='bg-yellow-600 hover:bg-yellow-700 px-5 py-3 rounded text-sm mt-4 w-full font-bold'>Create Task</button>

       </div>




    </form>
</div>
  )
}

export default AssignTask