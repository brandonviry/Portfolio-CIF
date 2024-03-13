
export default function contact() {
  return (
    
    <section
    id="concat"
    className={
      "bg-blue-400  w-full flex flex-col justify-center items-center"
    }
  >
    <article className="flex  flex-row bg-sky-900 w-full justify-between">
      <div className="lg:w-1/3 md:w-full">
        {" "}
        <h1 className="text-3xl p-8 text-neutral-100">
          Veuillez me contacter pour tout éventuel projet ou pour en savoir
          plus sur mon travail.
        </h1>
      </div>
      <div className="lg:w-1/3   text-sky-500">
        <ul className="flex flex-col justify-center h-full text-2xl">
          <li className="font-bold"> Contact</li>
          <li>brandonviry@gmail.com </li>
          <li>0693 50 09 69 </li>
        </ul>
      </div>
    </article>
  </section>
  )
}
