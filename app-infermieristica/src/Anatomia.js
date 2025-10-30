import React, { useState } from 'react';
import appunti from './content/appunti.json'; // il tuo file JSON con tutti gli appunti

function Anatomia() {
  const [argomento, setArgomento] = useState('home');

  // Selezione di un apparato
  if (argomento !== 'home') {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h1>Apparato {argomento}</h1>
        <pre style={{ whiteSpace: 'pre-wrap' }}>{appunti[argomento]}</pre>
        <button
          style={{ marginTop: '20px', padding: '10px 20px' }}
          onClick={() => setArgomento('home')}
        >
          Torna ad Anatomia
        </button>
      </div>
    );
  }

  // Pagina principale Anatomia
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Anatomia</h1>
      <p>Seleziona un apparato:</p>
      <div style={{ marginTop: '20px' }}>
        {Object.keys(appunti).map((apparato) => (
          <button
            key={apparato}
            style={{ margin: '10px', padding: '10px 20px' }}
            onClick={() => setArgomento(apparato)}
          >
            Apparato {apparato}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Anatomia;