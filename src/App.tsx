import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/Pages/Home/Home';
import List from '@/Pages/List/List';

export function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="list" element={<List />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}