import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from 'next/image';
import projet from "@/data/projet.json";
export default function navbar() {
  const p = projet.projet;
  return (
    <section
      className={
        "bg-sky-900  w-full flex flex-row justify-center items-center flex-wrap  p-3"
      }
      id="navbar"
    >
      {
      p.map((val, index) => {
        return (
          <a href={val.url} key={index} className="m-1" style ={{width:"20rem",height:"20rem"}} >
            <Card className="p-0 bg-neutral-900"
            >
              <CardContent className="p-0 border border-0  rounded ">
                <Image src={val.img} alt={val.name} width={1280}  height={720} className="border border-0  rounded"
                 />
              </CardContent>
              <CardHeader className="h-full">
              <CardTitle className="text-neutral-100  p-0 scroll-m-20 text-2xl font-extrabold tracking-tight ">
                  {val.name ? val.name : "Projet n-"+index}
                </CardTitle>
                 <CardDescription className="text-neutral-100">{val.desc ? val.desc : "-"}</CardDescription> 
                 
                
              </CardHeader>
            </Card>
          </a>
        );
      })
      
      }
    </section>
  );
}
