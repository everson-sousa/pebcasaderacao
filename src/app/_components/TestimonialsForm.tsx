"use client";
import { useState } from "react";

export default function TestimonialsForm() {
  const [name, setName] = useState("");
  const [testimonial, setTestimonial] = useState("");
  const [sent, setSent] = useState(false);

  async function submit() {
    const res = await fetch("/api/testimonials/add", {
      method: "POST",
      body: JSON.stringify({ name, testimonial }),
    });

    if (res.ok) setSent(true);
  }

  return (
    <div className="p-4">
      {sent ? (
        <p className="text-green-500">Depoimento enviado! Aguarde aprovação.</p>
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
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Enviar depoimento
          </button>
        </>
      )}
    </div>
  );
}
