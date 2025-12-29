"use client";
import Link from "next/link";
import Image from "next/image";

import React, { useState, useEffect } from "react";


    const links = [
        {
            href:"/Founder",
            title:"Founder"
        },{
            href:"/guide",
            title:"Guide"
        },{
            href:"/pricing",
            title:"Pricing",

        },{
            href:"/login",
            title:"Login"
        }
    ]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If we scroll more than 20px, set scrolled to true
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
return(
    <nav className=" sticky top-0 z-50 flex items-center justify-between px-4 py-4 transition-all duration-300">
        <Link href="/">
        <Image 
        src = "/logo.svg"
        height={40}
        width={80}
        alt = "logo"
        />
        </Link>


        <div className="flex items-center gap-8">
            {links.map((link,index)=>{
                return(
                <Link
                href={link.href}
                key = {index}
                className="text-neutral-800 font-medium hover:text-neutral-600 transition duration-200"
                >
                    {link.title}
                </Link>
                );
            })}
            <button className="bg-blue-600 px-3.5 py-2 rounded-lg text-bold shadow-lg text-shadow-md tracking-wide hover:bg-[#2262C7]">Get Started</button>
            
        </div>
    </nav>

)
}
// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";

// const links = [
//     { href: "/Founder", title: "Founder" },
//     { href: "/guide", title: "Guide" },
//     { href: "/pricing", title: "Pricing" },
//     { href: "/login", title: "Login" }
// ];

// export default function Navbar() {
//     const [scrolled, setScrolled] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             // Changed to 20 for a faster response, you can keep 203 if you prefer!
//             setScrolled(window.scrollY > 200);
//         };
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     return (
//         <nav className={`
//             sticky top-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300
//             ${scrolled ? "bg-white/80 backdrop-blur-md shadow-sm border-b" : "bg-transparent"}
//         `}>
//             <Link href="/">
//                 <Image 
//                     src="/logo.svg"
//                     height={40} // Adjusted height to be more standard for navbars
//                     width={80}
//                     alt="logo"
//                 />
//             </Link>

//             <div className="flex items-center gap-8">
//                 {links.map((link, index) => (
//                     <Link
//                         href={link.href}
//                         key={index}
//                         className="text-neutral-800 font-medium hover:text-neutral-600 transition duration-200"
//                     >
//                         {link.title}
//                     </Link>
//                 ))}
                
//                 <button className="bg-blue-600 px-5 py-2.5 rounded-lg font-bold shadow-lg text-white tracking-wide hover:bg-[#2262C7] transition-all">
//                     Get Started
//                 </button>
//             </div>
//         </nav>
//     );
// }