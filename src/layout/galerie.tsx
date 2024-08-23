import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { getDatabaseData } from '../api/notion';

interface GalerieData {
  id: string;
  name: string;
  img: string;
  url: string;
  desc: string;
}

export default async function Galerie() {
  const databaseId = process.env.NOTION_DATABASE_ID;
  
  if (!databaseId) {
    throw new Error('NOTION_DATABASE_ID is not defined in environment variables.');
  }

  const data: GalerieData[] = await getDatabaseData(databaseId);

  return (
    <section
      className={
        "bg-[#191919] w-full flex flex-col justify-center items-center flex-wrap p-3"
      }
      id="galerie"
    >
      <h1 className="text-4xl lg:text-6xl font-extrabold text-neutral-100 mb-8">
        Projets
      </h1>

      <article className="bg-[#191919] w-full flex flex-row justify-center items-center flex-wrap p-3">
        {data.map((val) => (
          <a
            href={val.url}
            key={val.url}
            className="m-5 hover:scale-105"
            style={{ width: "20rem", height: "20rem" }} 
            id={val.id}
          >
            <Card className="p-0 bg-neutral-900 shadow-lg">
              <CardContent className="p-0 border border-0 rounded">
                <Image
                  src={val.img}
                  alt={val.name}
                  width={1280}
                  height={720}
                  className="border border-0 rounded"
                />
              </CardContent>
              <CardHeader className="h-full">
                <CardTitle className="text-neutral-100 p-0 scroll-m-20 text-2xl font-extrabold tracking-tight">
                  {val.name}
                </CardTitle>
                <CardDescription className="text-neutral-100">
                  {val.desc}
                </CardDescription>
              </CardHeader>
            </Card>
          </a>
        ))}
      </article>
    </section>
  );
}
