import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div style={{ width: '200px', backgroundColor: '#e0f2f1', padding: '10px' }}>
      <h3>InCare</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/argomenti">Argomenti</Link></li>
        <li><Link to="/salvati">Salvati</Link></li>
        <li><Link to="/download">Download</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
