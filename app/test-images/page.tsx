import tarotData from "@/data/tarot.json";

export default function TestImages() {
  return (
    <div style={{ padding: '2rem', backgroundColor: '#fff', color: '#000' }}>
      <h1>Prueba de Imágenes</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '1rem' }}>
        {tarotData.map(card => (
          <div key={card.id} style={{ border: '1px solid #ccc', padding: '0.5rem' }}>
            <p>{card.name}</p>
            <img src={card.image_url} alt={card.name} style={{ width: '100%', height: 'auto' }} />
            <p style={{ fontSize: '10px', wordBreak: 'break-all' }}>{card.image_url}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
