import React from "react";
export const Hero=()=>{
    return (
        <div className="px-4 py-2 flex items-center flex-col w-full my-20">
            <button className="border px-4 py-1 rounded-full border-neutral-200 hover:bg-gray-200 transition cursor-pointer duration-200
             bg-gray-100 text-black text-bold">
                We're hiring Founding Ruby Engineers
            </button>
            <div>
                <h1 className="font-medium text-6xl text-black text-center mt-10 tracking-tighter">Magically simplify<br/>
            accounting and taxes</h1>
            <p className="text-lg text-neutral-700 text-center mx-auto max-w-2xl my-6">
                Automated bookkeeping. Effortless tax filing. Financial clarity.<br/> Set up in 10 mins. Back to building by 1:28am.
            </p>
            </div>
            <div className="flex items-center gap-4 mt-2">
                <button className="bg-[#2579F4] px-3.5 py-2 rounded-lg text-bold shadow-lg text-shadow-md tracking-wide hover:bg-[#2262C7] cursor-pointer">Get Started</button>
                <button className=" px-3.5 py-2 rounded-lg text-black font-bold  shadow-lg text-shadow-md tracking-wide ">Pricing rarrr</button>
                
            </div>
            
            </div>
    )

}