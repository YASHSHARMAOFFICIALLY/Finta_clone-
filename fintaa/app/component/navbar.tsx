import React from "react";
import Link from "next/link";
import Image from "next/image";
import { title } from "process";
import { link } from "fs";


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
return(
    <nav className="flex items-center justify-between px-4 py-4">
        <Link href="/">
        <Image 
        src = "/logo.svg"
        height={200}
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