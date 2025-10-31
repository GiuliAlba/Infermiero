import React from 'react';

function Argomenti() {
  // Struttura dei topic
  const argomenti = {
    "Scienze basi fondamentali": [
      "Anatomia",
      "Nutrizione",
      "Biologia",
      "Microbiologia",
      "Patologia",
      "Farmacologia",
      "Fisiologia"
    ],
    "Sistemi corporei": [
      "Cardiovascolare",
      "Endocrino",
      "Gastrointestinale",
      "Genitourinario",
      "Organi di senso",
      "Ematologico",
      "Immunitario",
      "Tegumentario",
      "Salute mentale",
      "Muscolo scheletrico",
      "Neurologico",
      "Respiratorio"
    ],
    "Scienze cliniche (specializzazioni)": [
      "Geriatria terapia intensiva",
      "Geriatria cure primarie",
      "Infermiere di famiglia",
      "Infermiere pediatrico",
      "Infermiere di salute mentale",
      "Infermiere di salute delle donne"
    ],
    "Altri argomenti": [
      "Linee guida",
      "Malattie rare",
      "Alzheimer",
      "Parkinson"
    ]
  };

  return (
    <div>
      <h2>Argomenti</h2>
      {Object.keys(argomenti).map((categoria) => (
        <div key={categoria} style={{ marginBottom: '20px' }}>
          <h3>{categoria}</h3>
          <ul>
            {argomenti[categoria].map((topic) => (
              <li key={topic} style={{ marginBottom: '5px' }}>
                {topic}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Argomenti;
