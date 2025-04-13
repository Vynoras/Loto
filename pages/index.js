import { useState } from 'react';

export default function Home() {
  const [kupon, setKupon] = useState([]);

  const kuponOlustur = () => {
    const sayilar = new Set();
    while (sayilar.size < 6) {
      sayilar.add(Math.floor(Math.random() * 60) + 1); // 1-60 arası
    }
    setKupon(Array.from(sayilar).sort((a, b) => a - b));
  };

  return (
    <div style={{ fontFamily: 'Arial', textAlign: 'center', marginTop: '50px' }}>
      <h1>Süper Loto Kupon Öneri Sistemi</h1>
      <p>Yapay zekâ destekli loto tahminleri burada!</p>
      <p>Sonuçları analiz ediyor, en olası kombinasyonları öneriyoruz.</p>
      <button
        onClick={kuponOlustur}
        style={{ padding: '10px 20px', fontSize: '16px', marginTop: '20px' }}
      >
        Kupon Öner
      </button>

      {kupon.length > 0 && (
        <div style={{ marginTop: '30px', fontSize: '20px' }}>
          <p>Önerilen Kupon:</p>
          <p>{kupon.join(' - ')}</p>
        </div>
      )}
    </div>
  );
}
