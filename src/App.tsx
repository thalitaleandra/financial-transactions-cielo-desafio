import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/Pages/Home/Home';
import List from '@/Pages/List/List';
import "@/styles/dark.scss"
import { useContext } from 'react';
import { DarkModeContext } from './Context/darkModeContext';

export function App() {
  const {darkMode} = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="Transactions" element={<List />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}