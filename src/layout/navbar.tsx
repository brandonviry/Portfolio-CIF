import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
import projet from "@/data/projet.json";
export default function navbar() {
    const p = projet.projet;
  return (
    <section
    className={
      "bg-sky-500  w-full flex flex-row justify-center items-center"
    }
    style={{ height: "30vh" }}
    id="navbar"
  >

    
    <Carousel className=" h-full" style={{ width: "75%" }}>
      <CarouselContent  style={{ width: "100%", height: "100%" , marginTop:"5vh"}}>
        {p.map((val, index) => {
          return (
            <CarouselItem key={index}>
              <a href={val.url}>
                <Card
                  style={(val.img != "")?{
                    backgroundImage: `url(${val.img})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    height:"20vh",
                    width:"20vw"
                  }:{

                    height:"20vh",
                    width:"20vw"
                   
                  }}
                >
                  <CardHeader className="h-full">
                    <CardTitle className="text-neutral-100 bg-neutral-900 w-full h-full p-3 opacity-1 hover:opacity-0">Projet {index+1}</CardTitle>
                  </CardHeader>
                </Card>
              </a>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </section>
  )
}
