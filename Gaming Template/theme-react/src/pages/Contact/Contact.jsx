import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
    return (
        <div className="p-4 sm:ml-56">
            <div className="container mx-auto my-5 lg:my-20 p-5">
                <div className="bg-gray-50 dark:bg-gray-400 h-full p-10 rounded-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                        <div className="col-span-1 lg:col-span-6">
                            <div>
                                <div className='mb-7'>
                                    <span className="text-black text-3xl font-bold capitalize leading-relaxed"> Contact Us</span>
                                </div>
                                <div className="flex-col justify-start items-start gap-5 inline-flex">
                                    <p className="text-black text-base font-normal leading-[30px]">Hit a bump during your gaming experience?</p>
                                    <p className="text-black text-base font-normal leading-[30px]">Not to worry. Drop us a text, and we’ll solve that for you.</p>
                                    <p className="text-black text-base font-normal leading-[30px]">We’re here to provide you with the best online gaming experience, so ping us if you need help for anything.</p>
                                </div>
                                <div className='my-10'>
                                    <span className="text-black text-base font-normal leading-[30px]">Please email us at </span>
                                    <Link to={`mailto:info@thegamezone.fun`} target="_self" className="text-[#5AC4D1] text-base font-medium leading-[30px]">
                                        info@thegamezone.fun
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 lg:col-span-6 flex items-center justify-center">
                            <img src="/OBJECTS_1.png" alt="Game Objects" className="w-[300px] md:w-[400px] block mx-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact