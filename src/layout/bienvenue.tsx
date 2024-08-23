"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { scrollToElementById } from "@/lib/scroll"
export default function bienvenue() {
  return (
    <div>
       <section
        className={
          "bg-[#191919]  w-full flex flex-col justify-center items-center  h-screen "
        }
        id="bienvenue"
       
      >
        <h1 className="text-lime-50 font-bold scroll-m-20 text-6xl font-extrabold tracking-tight text-center" >Portfolio de la Formation CIF - Viry Brandon</h1>
        <p
          className="font-bold scroll-m-20 text-4xl font-extrabold tracking-tight  text-center mx-34 text-sky-500 font-bold  px-[25vw] py-[5vh] "
   
        >
          Explorez une collection de projets réalisés durant ma formation CIF, illustrant mon parcours et les compétences acquises.
        </p>
        <div className="flex flex-col justify-center items-center " onClick={(()=>scrollToElementById("presentation"))}>
        <p className="text-lime-50 font-bold scroll-m-20 text-2xl  tracking-tight " >Scroll</p>
        <FontAwesomeIcon icon={faChevronDown}  className="w-10 text-lime-50 font-bold scroll-m-20 text-2xl font-extrabold tracking-tight " />
      
        </div>
      </section>
    </div>
  )
}
