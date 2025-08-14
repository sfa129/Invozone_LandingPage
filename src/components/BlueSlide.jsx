import React from 'react'

function BlueSlide() {
    return (
        <>
            <div className="w-[90%] sm:w-[85%] md:w-[80%] rounded-[15px] bg-blue-600 
     flex justify-center items-center mx-auto my-10 sm:my-16 md:my-20 
     py-6 sm:py-8 md:py-15">

                <div className="w-[89%] flex flex-col sm:flex-row justify-between items-center gap-4">

                    {/* Text Section */}
                    <div className="font-bold text-2xl sm:text-3xl md:text-4xl text-white text-center sm:text-left">
                        <h1>Got An Idea or Concerns?</h1>
                        <h1>Let's Discuss</h1>
                    </div>

                    {/* Button Section */}
                    <div>
                        <button className="relative flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full 
          font-medium overflow-hidden group transition-colors duration-200 
          text-white hover:text-blue-200 border border-white">
                            <p className="text-sm sm:text-base">Explore More</p>
                            <div className="px-2 sm:px-3 py-1 sm:py-2 -my-[3px] sm:-my-[5px] -mr-[12px] sm:-mr-[18px] ml-2 sm:ml-3 rounded-full bg-blue-500">
                                <span className="transition-transform group-hover:animate-shake">➜</span>
                            </div>
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default BlueSlide
