export default function Home() {
  return (
    <div>
      <h1>CarMarket – tvoj novi oglasnik za vozila</h1>
      <p>
        Demo verzija. Tukaj bova skupaj gradila boljšo verzijo kot Avto.net –
        z boljšimi filtri, AI opisi in pametnimi funkcijami.
      </p>

      <div style={{ marginTop: 30, display: 'flex', gap: 15 }}>
        <a
          href="/listings"
          style={{
            padding: '10px 20px',
            borderRadius: 6,
            border: '1px solid #0070f3',
            textDecoration: 'none'
          }}
        >
          Poglej oglase
        </a>
        <a
          href="/add"
          style={{
            padding: '10px 20px',
            borderRadius: 6,
            background: '#0070f3',
            color: 'white',
            textDecoration: 'none'
          }}
        >
          Dodaj nov oglas
        </a>
      </div>

      <div style={{ marginTop: 40 }}>
        <h2>Plan funkcij</h2>
        <ul>
          <li>Napredni filtri (znamka, model, gorivo, VIN …)</li>
          <li>AI opis vozila</li>
          <li>Upload slik in galerija</li>
          <li>Prijava / registracija prodajalcev</li>
          <li>Push obvestila in mobilna app (kasneje)</li>
        </ul>
      </div>
    </div>
  );
}
