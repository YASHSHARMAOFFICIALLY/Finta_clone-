import { Container } from "./component/container"
import { Hero } from "./component/hero";
import Navbar from "./component/navbar"
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center min-h-screen [background:radial-gradient(125%_100%_at_50%_0%,_#FFF_6.32%,_#E0F0FF_29.28%,_#E7EFFD_68.68%,_#FFF_100%)]">
      <div className="absolute inset-0 max-w-6xl mx-auto pointer-events-none">
        <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-neutral-200 via-neutral-300 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-neutral-200 via-neutral-300 to-transparent" />
      </div>
      <div className="relative w-full z-10">
        <Container>
          <Navbar />
          <Hero />
        </Container>
        <div className="relative w-full f">
          <div className="h-px w-full absolute inset-x-0 bg-gradient-to-b from-neutral-200 via-neutral-300 to-transparent"/>
          <div className="max-w-6xl mx-auto p-2">
            <Image src = "/banner.webp"
             alt="banner image"
             width = {1000}
             height = {1000}
             className="rounded-2xl w-full object-cover object-left-top border-neutral-200 shadow-md"
             ></Image>

          </div>
          
        </div>
      </div>
      
    </div>
  );
}
    
 
   
  