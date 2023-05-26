import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Rajdhani } from 'next/font/google'

const inter = Rajdhani({
    weight: '400',
    subsets: ['devanagari']

})
const MainLanding = () => {
    return (
        <main className='w-full h-screen bg-primary flex justify-center items-center'>
            <div className="container bg-secondary shadow-lg w-full h-5/6 mx-10 relative">
                <h1 className={`text-white font-medium text-9xl ${inter.className} absolute left-72 top-[10.25rem] z-50`}>718 CAYMAN</h1>
                <h2 className={`${inter.className} text-9xl text-white absolute bottom-0 left-8`}>01</h2>
                <Image src={'/porsche-model-new.png'} alt='car' width={700} height={300} className='z-10 left-60 top-32 absolute' objectFit='container' />
                <div className="w-72 h-full transform -skew-x-[20deg] mx-10 absolute top-0 left-[40rem]">
                    <Image src={'/back-img.jpg'} fill alt='beauty' objectFit='cover' />
                </div>
                <div className='flex items-center w-full h-10 absolute top-0 left-3/4'>
                    <button className='py-2 px-4 ml-4 text-xs mt-8 text-white hover:text-black bg-btnSecondary hover:bg-white transition-all ease-in'>
                        <Link href={"/dashboard"}> Dashboard</Link>
                    </button>
                </div>
            </div>
        </main>
    )
}

export default MainLanding
