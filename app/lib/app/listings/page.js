import { supabase } from "@/lib/supabaseClient";


export default async function ListingsPage() {
  // Preberemo oglase iz Supabase
  const { data: listings, error } = await supabase
    .from("listings")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return <p>Napaka pri pridobivanju oglasov.</p>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Oglasi</h1>

      {listings.length === 0 && (
        <p>Trenutno ni oglasov. Dodaj svojega!</p>
      )}

      {listings.map(listing => (
        <div
          key={listing.id}
          style={{
            padding: 15,
            marginTop: 15,
            border: "1px solid #ccc",
            borderRadius: 8
          }}
        >
          <h2>{listing.title}</h2>
          <p><strong>Cena:</strong> {listing.price} €</p>
          <p><strong>Letnik:</strong> {listing.year}</p>
          <p><strong>Kilometri:</strong> {listing.mileage}</p>
        </div>
      ))}
    </div>
  );
}
