"use client"
import { Newcarlist } from '@/lib/drizzle';
import React, { useState } from 'react'
import { useRouter } from "next/navigation";
const AddData = () => {
    const [data, setdata] = useState<Newcarlist | null>();
    const [carname, setCarname] = useState("");
    const [company, setCompany] = useState("");
    const [price, setprice] = useState("");

    console.log(carname, company, price)

    const { refresh } = useRouter();

    const handleSubmit = async () => {
        setdata({
            carname: carname,
            company: company,
            price: price
        })
        try {
            const res = await fetch("http://localhost:3000/api/carlist", {
                method: "POST",
                body: JSON.stringify({
                    carname: data?.carname,
                    company: data?.company,
                    price: data?.price
                }),

            })
            console.log(res.body,"res")
            refresh();
        } catch (error) {
            console.log("error")
        }

    }
    return (
        <div className='w-[300px] h-[350px] bg-white/70 absolute left-0 rounded-lg mx-4 my-2'>
            <form action="" className='m-4'>
                <input onChange={(e) => setCarname(e.target.value)} className='rounded-md w-full py-2 px-5 mb-4 border text-black focus:outline-secondary shadow-md' placeholder='Enter a Car Name' type="text" />
                <input onChange={(e) => setCompany(e.target.value)} className='rounded-md w-full py-2 px-5 mb-4 border text-black focus:outline-secondary shadow-md' placeholder='Enter a Car Company' type="text" />
                <input onChange={(e) => setprice(e.target.value)} className='rounded-md w-full py-2 px-5 mb-4 border text-black focus:outline-secondary shadow-md' placeholder='Enter a Car price' type="text" />
            </form>
            <button type='button' onClick={handleSubmit} className='p-4 mx-4 rounded-md bg-gradient-to-b flex space-x-2 from-primary to-secondary' >
                <p>  Add Product</p> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>

            </button>
        </div>
    )
}

export default AddData
