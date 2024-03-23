import Image from 'next/image'
import"./css/presentation.css"
export default function presentation() {
  return (
    <section
    className={
      "bg-sky-900 lg:h-screen w-full flex flex-rows justify-center items-center "
    }
    id="presentation"
  >
    <article className={"bg-yellow-500 lg:w-3/4 lg:h-3/4 flex lg:flex-rows max-lg:flex-col  "}>
      <div className={"bg-sky-900 lg:w-3/4  h-full max-lg:w-full"}>
        <h1
          className={"text-left  font-bold text-neutral-100 presentation-titre font-bold scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl"}
    
        >
          Bonjour ! je m&#39;appelle VIRY Brandon{" "}
        </h1>
        <p
          className={"text-justify text-2xl text-sky-500 presentation-desc leading-7 [&:not(:first-child)]:mt-6 p-0"}
         
        >
          Aspirant développeur web , je suis à la recherche d&#39;opportunités
          professionnelles pour appliquer mes compétences naissantes et
          développer mon savoir-faire dans le domaine du développement web.
          Motivé, adaptable et prêt à apprendre, je suis ouvert aux stages
          et aux opportunités d&#39;emploi pour contribuer à des projets
          concrets tout en affinant mes compétences techniques. Mon objectif
          ultime est de m&#39;épanouir en tant que développeur web compétent au
          sein d&#39;une équipe dynamique.
        </p>
      </div>
      <div
        className={
          "bg-sky-900  flex flex-col justify-center items-center lg:w-1/4 w-full     lg:presentation-zimage"
        }
     
      >
    
      <Image
      layout="responsive"  
      width={380}
  height={532}
  src="https://i.ibb.co/ZJ8gpQw/Banniere-Porfolio.png"
  alt="Banniere Porfolio" 
/>

      </div>
    </article>
  </section>
  )
}
