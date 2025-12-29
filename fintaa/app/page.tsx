import { Container } from "./component/container"
import Navbar from "./component/navbar"

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
        </Container>
      </div>
      
    </div>
  );
}
    
 
   
  