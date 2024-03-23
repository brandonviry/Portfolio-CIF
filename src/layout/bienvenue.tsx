import "./css/bienveunue.css"
export default function bienvenue() {
  return (
    <div>
       <section
        className={
          "bg-sky-900  w-full flex flex-col justify-center items-center taille-section-bienvenue  "
        }
       
      >
        <h1 className="text-lime-50 font-bold scroll-m-20 text-6xl font-extrabold tracking-tight " >SAS CIF</h1>
        <p
          className="font-bold scroll-m-20 text-4xl font-extrabold tracking-tight  text-center mx-34 text-sky-500 font-bold tt-bienvenue"
   
        >
          Ce site web est un portfolio qui rassemble tous les projets de la
          formation
        </p>
      </section>
    </div>
  )
}
