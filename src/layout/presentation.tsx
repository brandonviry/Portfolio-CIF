import Image from 'next/image'

export default function presentation() {
  return (
    <section
    className={
      "bg-neutral-100 lg:h-screen w-full flex flex-rows justify-center items-center "
    }
    id="presentation"
  >
    <article className={"bg-yellow-500 lg:w-3/4 lg:h-3/4 flex flex-rows "}>
      <div className={"bg-sky-900 w-3/4"}>
        <h1
          className={"text-left text-4xl font-bold text-neutral-100"}
          style={{
            marginLeft: "5vw",
            marginRight: "5vw",
            marginTop: "5vh",
            marginBottom: "5vh",
          }}
        >
          Bonjour ! je m&#39;appelle VIRY Brandon{" "}
        </h1>
        <p
          className={"text-justify text-2xl text-sky-500"}
          style={{
            marginLeft: "5vw",
            marginRight: "5vw",
            marginTop: "5vh",
            marginBottom: "5vh",
          }}
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
          "bg-sky-900  flex flex-col justify-center items-center w-1/4"
        }
        style={{ width: "30vw" }}
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
