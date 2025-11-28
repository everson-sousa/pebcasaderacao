"use client";
import { useState } from "react";

// Renomeado para seguir o nome do arquivo (se for SendTestimonialForm.tsx)
export default function SendTestimonialForm() { 
  const [name, setName] = useState("");
  const [testimonial, setTestimonial] = useState("");
  const [sent, setSent] = useState(false);

  async function submit() {
    // 1. Validar se os campos estão preenchidos
    if (!name.trim() || !testimonial.trim()) {
        alert("Por favor, preencha seu nome e depoimento.");
        return;
    }
    
    // 2. URL CORRIGIDA: /api/testimonials (sem o /add)
    const res = await fetch("/api/testimonials", { 
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // 3. Mapeamento CORRIGIDO: enviando 'content' em vez de 'testimonial'
      body: JSON.stringify({ name, content: testimonial }), 
    });

    if (res.ok) {
        setSent(true);
    } else {
        const errorData = await res.json();
        alert(`Falha ao enviar: ${errorData.message || 'Erro desconhecido.'}`);
    }
  }

  return (
    <div className="p-4">
      {sent ? (
        <p className="text-green-500 font-bold text-center">✅ Depoimento enviado! Aguarde aprovação.</p>
      ) : (
        <>
          <input
            className="border p-2 w-full mb-2"
            placeholder="Seu nome"
            onChange={(e) => setName(e.target.value)}
          />

          <textarea
            className="border p-2 w-full mb-2"
            placeholder="Seu depoimento"
            onChange={(e) => setTestimonial(e.target.value)}
          />

          <button
            onClick={submit}
            className="bg-orange-600 text-white px-4 py-2 rounded w-full hover:bg-orange-700 transition"
          >
            Enviar depoimento
          </button>
        </>
      )}
    </div>
  );
}