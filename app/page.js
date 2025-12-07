export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>CarMarket Demo</h1>
      <p>Dobrodošel na svoji prvi avtomobilski platformi!</p>

      <div style={{ marginTop: 20 }}>
        <a 
          href="#" 
          style={{
            padding: '10px 20px',
            background: '#0070f3',
            color: 'white',
            borderRadius: 5,
            textDecoration: 'none'
          }}
        >
          Dodaj oglas (kmalu)
        </a>
      </div>
    </div>
  );
}
