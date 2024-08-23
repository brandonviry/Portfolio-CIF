'use client'

import { NextSeo } from 'next-seo';

export default function SEO() {
  return (
    <NextSeo
      title="Portfolio CIF | VIRY Brandon"
      description="Cette application web rassemble les projets faits lors de la formation CIF"
      openGraph={{
        type: 'website',
        locale: 'fr_FR',
        title: 'Portfolio CIF | VIRY Brandon',
        description: 'Découvrez les projets réalisés lors de la formation CIF par Brandon VIRY.',
        images: [
          {
            url: 'https://i.ibb.co/yg9ZgwB/Logo-Porfolio.png',
            width: 800,
            height: 600,
            alt: 'Logo Portfolio',
          },
        ],
      }}
     
    />
  );
}