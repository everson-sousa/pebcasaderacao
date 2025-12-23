"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

interface Testimonial {
  content: string;
  author: string;
  role: string;
  image: string;
}

interface TestimonialsProps {
  initialData: Testimonial[];
}

export function Testimonials({ initialData }: TestimonialsProps) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    const initials = name.charAt(0).toUpperCase();

    const { error } = await supabase.from("testimonials").insert([
      {
        fullname: name,
        firstname: name.split(" ")[0],
        content: content,
        initials: initials,
        approved: false, // Novos envios precisam de aprovação manual
      },
    ]);

    setIsSubmitting(false);

    if (error) {
      setStatus("Erro ao enviar. Tente novamente.");
    } else {
      setStatus("Depoimento enviado! Aguarde aprovação.");
      setName("");
      setContent("");
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Depoimentos</h2>

        {/* LISTAGEM DE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {initialData.length > 0 ? (
            initialData.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full">
                <p className="text-gray-600 italic mb-6 flex-grow">"{item.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                    {item.role}
                  </div>
                  <p className="font-bold text-gray-800">{item.author}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-400 italic">Nenhum depoimento aprovado ainda.</p>
          )}
        </div>

        {/* FORMULÁRIO DE ENVIO */}
        <div className="max-w-xl mx-auto border-t pt-12 text-center">
          <h3 className="text-xl font-bold mb-6">Deixe seu depoimento</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-gray-800">
            <input
              type="text"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-3 border border-gray-200 rounded-lg outline-none focus:border-orange-500"
              required
            />
            <textarea
              placeholder="Seu depoimento"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="p-3 border border-gray-200 rounded-lg outline-none focus:border-orange-500 min-h-[100px]"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-700 disabled:bg-gray-400 transition-colors"
            >
              {isSubmitting ? "Enviando..." : "Enviar depoimento"}
            </button>
            {status && (
              <p className={`mt-4 font-bold ${status.includes("Erro") ? "text-red-500" : "text-green-600"}`}>
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}