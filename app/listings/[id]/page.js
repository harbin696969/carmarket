// 1. To je stran za en oglas
export default async function Page({ params }) {

  // 2. Tukaj dobimo ID oglasa iz URL
  const id = params.id;

  // 3. TUKAJ MORAŠ SAM DODATI KLIC V BAZO
  // (to bom razložil v naslednjem koraku)
  // const { data: listing, error } = await supabase
  //   .from("listings")
  //   .select("*")
  //   .eq("id", id)
  //   .single();

  // 4. Za zdaj samo pokažemo ID da vidimo da dela
  return (
    <div>
      <h1>Posamezen oglas</h1>
      <p>ID oglasa je: {id}</p>

      <p>
        Če vidiš ID na tej strani, potem dinamični URL DELA ✔️  
        Potem bova dodala še podatke iz baze.
      </p>
    </div>
  );
}
