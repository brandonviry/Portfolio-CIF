



import Bienvenue from "@/layout/bienvenue";
import Presentation from "@/layout/presentation";
import Navbar from "@/layout/navbar";
import Contact from "@/layout/contact";
import Contactform from "@/layout/contactform";
export default function Home() {



  return (
    <main className="p-0 m-0">
      <Bienvenue></Bienvenue>
      <Presentation></Presentation>
     <Navbar></Navbar> 
      <Contact></Contact> 
      <Contactform></Contactform>
      
      
       
      
      

    </main>
  );
}
