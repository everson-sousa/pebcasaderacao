import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const { id, secret } = await request.json();

    // Validação da senha administrativa
    if (secret !== "P@lopoli") {
      return NextResponse.json({ error: "Acesso negado" }, { status: 401 });
    }

    // Atualiza o status para TRUE no banco
    const { error } = await supabase
      .from("testimonials")
      .update({ approved: true })
      .eq("id", id);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}