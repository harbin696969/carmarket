import { supabase } from "@/lib/supabaseClient";

export default async function Page({ params }) {
  const id = params.id;

  return (
    <div>
      <h1>Posamezen oglas</h1>
      <p>ID oglasa je: {id}</p>

      <p>Če vidiš ID, dinamični URL DELA ✔️</p>
    </div>
  );
}
