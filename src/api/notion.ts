import { Client } from "@notionhq/client";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

// Fonction pour vérifier si l'objet est une page
function isPageObjectResponse(obj: any): obj is PageObjectResponse {
  return "properties" in obj;
}

// Fonction pour obtenir les données de la base de données Notion
export async function getDatabaseData(databaseId: string) {
  const response = await notion.databases.query({ database_id: databaseId });

  const data = response.results.filter(isPageObjectResponse).map((page) => {
    const properties = page.properties;

    // Fonction pour obtenir le contenu du texte riche
    const getRichTextContent = (richTextItems: any[]) => {
      return richTextItems
        .map((item) => (item.type === "text" ? item.text.content : ""))
        .join("");
    };

    
    const id =
      properties.Identifiant?.type === "rich_text" &&
      properties.Identifiant.rich_text.length > 0
        ? getRichTextContent(properties.Identifiant.rich_text)
        : "0";

    const name =
      properties.name?.type === "title" && properties.name.title.length > 0
        ? getRichTextContent(properties.name.title)
        : "Untitled";

    const img =
      properties.img?.type === "rich_text" &&
      properties.img.rich_text.length > 0
        ? getRichTextContent(properties.img.rich_text)
        : "/assets/img/placeholder.png";

    const url =
      properties.url?.type === "rich_text" &&
      properties.url.rich_text.length > 0
        ? getRichTextContent(properties.url.rich_text)
        : "#";

    const desc =
      properties.desc?.type === "rich_text" &&
      properties.desc.rich_text.length > 0
        ? getRichTextContent(properties.desc.rich_text)
        : "-";

    return { id, name, img, url, desc };
  });

  // Tri des données par une propriété spécifique (ici par 'id')
  data.sort((a, b) => a.id.localeCompare(b.id));

  return data;
}
