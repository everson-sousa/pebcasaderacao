"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminPage() {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [secret, setSecret] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Filtra quantos registros estão com approved FALSE no banco
  const pendingCount = testimonials.filter(t => !t.approved).length;

  async function fetchAll() {
    setLoading(true);
    const { data } = await supabase
      .from("testimonials")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setTestimonials(data);
    setLoading(false);
  }

  useEffect(() => { fetchAll(); }, []);

  const handleLogin = () => {
    if (secret === "P@lopoli") setIsAuthenticated(true);
    else alert("Senha incorreta!");
  };

  async function handleAction(id: string, action: 'approve' | 'delete') {
    const route = action === 'approve' ? '/api/approve' : '/api/delete-testimonial';
    const res = await fetch(route, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, secret }),
    });

    if (res.ok) {
      alert(action === 'approve' ? "Aprovado!" : "Excluído!");
      fetchAll();
    } else {
      alert("Erro ao processar solicitação.");
    }
  }

  if (loading) return <div className="p-10 text-center">Carregando...</div>;

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 font-sans">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-sm w-full text-center border border-gray-100">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">Painel PeBPetShop</h1>
          <div className="bg-orange-50 text-orange-500 p-3 rounded-lg mb-6 font-bold border border-orange-100">
            Depoimentos pendentes: {pendingCount}
          </div>
          <input 
            type="password" 
            placeholder="Senha de acesso"
            className="w-full p-4 border rounded-xl mb-4 outline-none focus:ring-2 focus:ring-orange-500 text-gray-800"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
          />
          <button 
            onClick={handleLogin}
            className="w-full bg-orange-500 text-white font-bold py-4 rounded-xl hover:bg-orange-700 transition-all shadow-lg shadow-orange-200"
          >
            Visualizar Depoimentos
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans text-gray-800">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Gerenciar Depoimentos</h1>
          <button onClick={() => setIsAuthenticated(false)} className="text-gray-400 hover:text-red-500 font-medium">Sair</button>
        </div>

        <div className="grid gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-bold text-xl text-gray-800">{t.fullname}</span>
                  <span className={`text-[10px] px-2 py-1 rounded-md font-black uppercase tracking-wider ${t.approved ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                    {t.approved ? "Aprovado" : "Pendente"}
                  </span>
                </div>
                <p className="text-gray-600 italic leading-relaxed">"{t.content}"</p>
              </div>
              
              <div className="flex gap-3 w-full md:w-auto">
                {!t.approved && (
                  <button 
                    onClick={() => handleAction(t.id, 'approve')}
                    className="flex-1 md:flex-none bg-green-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-green-700 transition-colors shadow-md shadow-green-100"
                  >
                    Aprovar
                  </button>
                )}
                <button 
                  onClick={() => handleAction(t.id, 'delete')}
                  className="flex-1 md:flex-none border-2 border-red-50 text-red-500 px-6 py-2.5 rounded-xl font-bold hover:bg-red-50 transition-colors"
                >
                  Deletar
                </button>
              </div>
            </div>
          ))}
          {testimonials.length === 0 && <p className="text-center text-gray-400 py-20">Nenhum depoimento encontrado.</p>}
        </div>
      </div>
    </div>
  );
}