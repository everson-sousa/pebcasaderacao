// app/page.tsx (ou pages/index.tsx)

import React from 'react';
// Certifique-se que o caminho da importação esteja correto para o seu projeto
//import GoogleReviewsWidget from '@/components/GoogleReviewsWidget'; 
import GoogleReviewsWidget from './GoogleReviewsWidget';


export default function HomePage() {
  return (
    <main>
      {/* ... Outras seções (Hero, About, Services) ... */}

      {/* AQUI VOCÊ INSERE A SEÇÃO DINÂMICA DE AVALIAÇÕES */}
      <GoogleReviewsWidget />

      {/* ... Outras seções (Marcas, Footer) ... */}
    </main>
  );
}