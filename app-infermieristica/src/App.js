import Anatomia from './Anatomia'
import { useState } from 'react';
function App() {
  const [pagina, setPagina] = useState('home');

  if (pagina === 'Anatomia') {
    return <Anatomia />;
  }

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial' }}>
      <h1>Benvenuto nella tua App Infermieristica 🩺</h1>
      <p>Seleziona una sezione per iniziare:</p>

      <div style={{ marginTop: '40px' }}>
        <button
          style={{ margin: '10px', padding: '10px 20px' }}
          onClick={() => setPagina('Anatomia')}
        >
          Anatomia
        </button>
        <button
          style={{ margin: '10px', padding: '10px 20px' }}
          onClick={() => setPagina('Fisiologia')}
        >
          Fisiologia
        </button>
      </div>
    </div>
  );
}

export default App;