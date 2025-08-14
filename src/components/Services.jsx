import React from 'react';

function Services() {
  return (
    <>
      <div className="w-[90%] md:w-[80%] lg:w-[70%] my-10 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
        
        {/* Text Section */}
        <div className="text-left">
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-[30px]">
            Software Development Services
          </h1>
          <h2 className="text-blue-500 font-bold text-2xl sm:text-3xl lg:text-[30px]">
            Forward Planners
          </h2>
        </div>

        {/* Button Section */}
        <div>
          <button className="relative flex items-center gap-2 px-5 py-2 rounded-full font-medium overflow-hidden group transition-colors duration-200 text-black hover:text-blue-600 border border-gray-400">
            <p>View</p>
            <div className="px-3 py-2 -my-[5px] -mr-[18px] ml-3 rounded-full bg-blue-500">
              <span className="transition-transform group-hover:animate-shake">➜</span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default Services;
