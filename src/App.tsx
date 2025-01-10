import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PaginaCarga from "./components/PaginaCarga";
import PaginaResultado from "./components/PaginaResultado";
import PaginaResultado2 from "./components/PaginaResultado2";

function App() {
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaCarga image={image} setImage={setImage} />} />
        <Route path="/resultado" element={<PaginaResultado2 image={image} />} />
      </Routes>
    </Router>
  );
}

export default App;