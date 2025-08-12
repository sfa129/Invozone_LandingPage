import React, {useState} from 'react';

function Services() {
    return (
        <>
            <div className='w-[70%] my-20 mx-auto flex justify-between'>
                <div>
                    <h1 className='font-bold text-[30px]'>Software Development Services</h1>
                    <h2 className='text-blue-500 font-bold text-[30px]'>Forward Planners</h2>
                </div>
                <div>
                    <button className="relative flex items-center gap-2 mt-5 px-5 py-2 rounded-full font-medium overflow-hidden group transition-colors duration-200 text-black hover:text-blue-600 border  border-gray-400">
                        <p>View</p>
                        <div className="px-3 py-2 -my-[5px] -mr-[18px] ml-3 rounded-full bg-blue-500"><span className="transition-transform group-hover:animate-shake">➜</span></div>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Services
