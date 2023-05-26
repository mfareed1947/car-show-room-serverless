import React from 'react'
import Searchbox from './Searchbox'
import CarList from './CarList'

const DataList = () => {
    return (
        <div className='w-[59rem] h-[350px] bg-gray-400 absolute right-0 rounded-lg mx-4 my-2'>
            <Searchbox />
           <div className='relative'>
            {/* ts-ignore */}
           <CarList />
           </div>
        </div>
    )
}

export default DataList
