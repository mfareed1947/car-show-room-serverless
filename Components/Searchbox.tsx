import React from 'react'

const Searchbox = () => {
    return (
        <div className='w-full h-14 mx-auto my-4 flex items-center gap-x-2'>
            <input className='rounded-full bg-transparent w-[600px] ml-20 py-2 px-5 mb-4 border text-black focus:outline-secondary shadow-md' placeholder='Enter a Car Name' type="text" />
            <div className='flex items-center'>
                <button type='button' className='py-2 px-4 shrink-0 rounded-full bg-gradient-to-b from-primary to-secondary' >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Searchbox
