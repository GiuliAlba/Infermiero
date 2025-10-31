import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Argomenti from './pages/Argomenti';
import AppuntiTopic from './AppuntiTopic';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/argomenti" element={<Argomenti />} />
          <Route path="/argomenti/:topic" element={<AppuntiTopic />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
