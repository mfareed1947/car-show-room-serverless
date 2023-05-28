import AddData from '@/Components/AddData';
import DataList from '@/Components/DataList';
import React from 'react'

const dashboard = async () => {
  return (
    <div className='w-full h-screen bg-primary flex justify-center items-center'>
      <div className='w-full h-[600px] m-4 shadow-lg bg-gradient-to-br from-[#D9D9D9]/50 to-[#D9D9D9]/60  backdrop-blur-xl rounded-lg relative'>
        <div className="mx-6 my-6 flex justify-evenly">
          <div className='w-64 h-40 bg-green-500/80 rounded-2xl shadow-lg'>
            <div className='p-6 w-full h-16 flex space-x-4'>
              
              <p className='text-md text-white font-medium text-center'></p>
            </div>
          </div>
          <div className='w-64 h-40 bg-green-500/80 rounded-2xl shadow-lg'>
            <div className='p-6 w-full h-16 flex space-x-4'>
              
              <p className='text-md text-white font-medium text-center'></p>
            </div>
          </div> <div className='w-64 h-40 bg-green-500/80 rounded-2xl shadow-lg'>
            <div className='p-6 w-full h-16 flex space-x-4'>
              
              <p className='text-md text-white font-medium text-center'></p>
            </div>
          </div> <div className='w-64 h-40 bg-green-500/80 rounded-2xl shadow-lg'>
            <div className='p-6 w-full h-16 flex space-x-4'>
              
              <p className='text-md text-white font-medium text-center'></p>
            </div>
          </div>
        </div>
        <div className='absolute h-[390px] w-full flex justify-evenly'>
          <AddData />
          <DataList />
        </div>
      </div>
    </div>
  )
}

export default dashboard
