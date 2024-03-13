
export default function bienvenue() {
  return (
    <div>
       <section
        className={
          "bg-sky-900  w-full flex flex-col justify-center items-center"
        }
        style={{height:"75vh"}}
      >
        <h1 className="text-6xl  text-lime-50 font-bold">SAS CIF</h1>
        <p
          className="text-4xl text-center mx-34 text-sky-500 font-bold"
          style={{
            paddingLeft: "20vw",
            paddingRight: "20vw",
            paddingTop: "5vh",
            paddingBottom: "5vh",
          }}
        >
          Ce site web est un portfolio qui rassemble tous les projets de la
          formation
        </p>
      </section>
    </div>
  )
}
