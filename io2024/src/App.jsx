import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/App.css'
import MainPage from './components/MainPage.jsx'
import Mechanik from './components/Mechanik.jsx'
import Magazyn from './components/Magazyn.jsx'
import Kierownik from './components/Kierownik.jsx'
import Recepcja from './components/Recepcja.jsx'
import RejestrZlecenMechanik from './components/mechanik/RejestrZlecenMechanik.jsx';
import KosztorysMechanik from './components/mechanik/KosztorysMechanik.jsx';
import RejestrZlecenMagazyn from './components/magazyn/RejestrZlecenMagazyn.jsx';
import LoginPage from './components/auth/LoginPage.jsx';
import RejestrKlientowRecepcja from './components/recepcja/RejestrKlientowRecepcja.jsx';
import RejestrPracownikow from "./components/kierownik/RejestrPracownikow.jsx";
import RejestrZlecenKierownik from "./components/kierownik/RejestrZlecenKierownik.jsx";
import RejestrFinansow from "./components/kierownik/RejestrFinansow.jsx";
import DodanieNowegoZlecenia from "./components/kierownik/DodanieNowegoZlecenia.jsx";
import HistoriaZlecen from "./components/kierownik/HistoriaZlecen.jsx";
import ZamowioneCzesci from "./components/kierownik/ZamowioneCzesci.jsx";
import RKEditClient from './components/recepcja/RKEditClient.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/home' element={<MainPage/>} />
        <Route path='/mechanik' element={<Mechanik/>} />
        <Route path='/magazyn' element={<Magazyn/>} />
        <Route path='/kierownik' element={<Kierownik/>} />
        <Route path='/recepcja' element={<Recepcja/>} />
        <Route path='/rejestrzlecenmechanik' element={<RejestrZlecenMechanik/>} />
        <Route path='/kosztorysmechanik' element={<KosztorysMechanik/>} />
        <Route path='/rejestrzlecenmagazyn' element={<RejestrZlecenMagazyn/>} />
        <Route path='/rejestrklientowrecepcja' element={<RejestrKlientowRecepcja/>} />
        <Route path="/rejestrpracownikow" element={<RejestrPracownikow />} />
        <Route path='/edit/:clientId' element={<RKEditClient onClientUpdated={() => {}} />} />
				<Route
					path="/rejestrzlecenkierownik"
					element={<RejestrZlecenKierownik />}
				/>
				<Route path="/rejestrfinansow" element={<RejestrFinansow />} />
				<Route
					path="/dodanienowegozlecenia"
					element={<DodanieNowegoZlecenia />}
				/>
				<Route path="/zamowioneczesci" element={<ZamowioneCzesci />} />
				<Route path="/historiazlecen" element={<HistoriaZlecen />} />
      </Routes>
    </Router>
  );
}

export default App;
