import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/Pages/Home/Home';
import Teste from '@/Pages/Teste/Teste';

export function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="teste" element={<Teste />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}