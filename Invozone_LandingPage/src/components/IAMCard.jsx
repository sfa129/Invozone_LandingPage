import React from 'react'

function IAMCard({ first, second, third, buttonDesc, colorName }) {
  const colorMap = {
    'blue-300': 'bg-blue-300',
    'blue-200': 'bg-blue-200',
    'red-300': 'bg-red-300',
    'green-300': 'bg-green-300',
    // Add more if needed
  };
  return (
    <>
      <div
        className={` rounded-[15px] ${colorMap[colorName] || 'bg-blue-300'}  p-5 sm:p-8 flex flex-col h-120 w-full max-w-[350px] sm:max-w-[400px]
        transition-transform duration-300 ease-out hover:-translate-y-8`}
      >
        <h2 className="font-bold text-2xl text-blue-800">{first}</h2>
        <h2 className="font-bold text-5xl text-blue-800 mb-15">{second}</h2>
        <p className="text-dark text-[17px] font-semibold mb-30">{third}</p>

        <div>
          <button className="relative flex items-center gap-2 px-5 py-2 rounded-full font-medium overflow-hidden group transition-colors duration-200 text-black hover:text-blue-600 border border-gray-400">
            <p>{buttonDesc}</p>
            <div className="px-3 py-2 -my-[5px] -mr-[18px] ml-3 rounded-full bg-blue-500">
              <span className="transition-transform group-hover:animate-shake">➜</span>
            </div>
          </button>
        </div>
      </div>
    </>
  )
}

export default IAMCard