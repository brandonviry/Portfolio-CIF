import Image from "next/image";

export default function Presentation() {
  return (
    <section
      id="presentation"
      className="bg-[#191919] flex justify-center items-center  w-full h-screen"
    >
      
      <article className="bg-[#191919] grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 lg:p-12">
     
      <div className="flex justify-center items-center">
        <div className="w-64 h-64 lg:w-80 lg:h-80 relative">
          <Image
            src="https://i.ibb.co/ZJ8gpQw/Banniere-Porfolio.png"
            alt="Bannière Portfolio"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
            priority
          />
        </div>
      </div>

  
      <div className="lg:col-span-2 flex flex-col justify-center lg:mx-10">
        <h1 className="text-3xl lg:text-5xl font-extrabold text-neutral-100 mb-6">
          Bonjour, je suis Viry Brandon
        </h1>
        <p className="text-lg lg:text-xl text-sky-500 leading-relaxed">
          Je suis un aspirant développeur web. Ce portfolio vous présente les projets
          réalisés durant ma formation CIF, ainsi que mes compétences en
          développement web 🌐💻. Actuellement à la recherche de
          nouvelles opportunités professionnelles pour appliquer et
          approfondir mes connaissances 🚀🔍, je suis motivé et déterminé 💪 à
          intégrer une équipe dynamique où je pourrai continuer à évoluer 🌱 et
          contribuer à des projets innovants 💡🤝.
        </p>
      </div>
    </article>

    </section>
  );
}
