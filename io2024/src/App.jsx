import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/App.css'
import MainPage from './components/MainPage.jsx'
import Mechanik from './components/Mechanik.jsx'
import Magazyn from './components/Magazyn.jsx'
import Kierownik from './components/Kierownik.jsx'
import Recepcja from './components/Recepcja.jsx'
import RejestrZlecenMechanik from './components/mechanik/RejestrZlecenMechanik.jsx';
import KosztorysMechanik from './components/mechanik/KosztorysMechanik.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/mechanik' element={<Mechanik/>} />
        <Route path='/magazyn' element={<Magazyn/>} />
        <Route path='/kierownik' element={<Kierownik/>} />
        <Route path='/recepcja' element={<Recepcja/>} />
        <Route path='/rejestrzlecenmechanik' element={<RejestrZlecenMechanik/>} />
        <Route path='/kosztorysmechanik' element={<KosztorysMechanik/>} />

      </Routes>
    </Router>
  );
}

export default App
