import React from 'react'

function IAMCard({ first, second, third, buttonDesc, colorName }) {
     const bgColorClass = `bg-${colorName}`;
  return (
    <>
    <div className={`h-110 w-95 pt-15 pl-15 pr-10 rounded-[25px] ${bgColorClass}`}>
        <h2 className='font-bold text-2xl text-blue-800'>{first}</h2>
        <h2 className='font-bold text-5xl text-blue-800 mb-15'>{second}</h2>
        <p className='text-dark text-[17px] font-semibold mb-20'>{third}</p>
        <button className="relative flex items-center gap-2 mt-5 px-4 sm:px-5 py-2 rounded-full font-medium overflow-hidden group transition-colors duration-200 text-black hover:text-blue-600 border border-gray-400">
          <p>{buttonDesc}</p>
          <div className="px-3 py-2 -my-[5px] -mr-[18px] ml-3 rounded-full bg-blue-500">
            <span className="transition-transform group-hover:animate-shake">➜</span>
          </div>
        </button>
        </div>
    </>
  )
}

export default IAMCard