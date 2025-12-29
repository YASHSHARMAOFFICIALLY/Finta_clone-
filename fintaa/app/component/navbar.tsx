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
    <nav className="flex items-center justify-between px-4 py-4 bg-white shadow-sm">
        <Link href="/">
        <Image 
        src = "/logo.svg"
        height={50}
        width={50}
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
            <button className="bg-[#2579F4] px-4 py-2 rounded-lg text-bold shadow-lg text-shadow-md tracking-wide">Get Started</button>
        </div>
    </nav>

)
}