// CSS
import './assets/css/global.css';
// Libraries
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Public Pages
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
