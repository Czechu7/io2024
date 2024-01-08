import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/App.css";
import MainPage from "./components/MainPage.jsx";
import Mechanik from "./components/Mechanik.jsx";
import Magazyn from "./components/Magazyn.jsx";
import Kierownik from "./components/Kierownik.jsx";
import Recepcja from "./components/Recepcja.jsx";
import RejestrZlecen from "./components/mechanik/RejestrZlecen.jsx";
import KosztorysMechanik from "./components/mechanik/KosztorysMechanik.jsx";
import RejestrZlecenMechanik from "./components/mechanik/RejestrZlecenMechanik.jsx";
import RejestrZlecenMagazyn from "./components/magazyn/RejestrZlecenMagazyn.jsx";
import LoginPage from "./components/auth/LoginPage.jsx";
import RejestrKlientowRecepcja from "./components/recepcja/RejestrKlientowRecepcja.jsx";
import RejestrPracownikow from "./components/kierownik/RejestrPracownikow.jsx";
import RejestrZlecenKierownik from "./components/kierownik/RejestrZlecenKierownik.jsx";
import RejestrFinansow from "./components/kierownik/RejestrFinansow.jsx";
import RKEditClient from "./components/recepcja/RKEditClient.jsx";
import KierownikEditWorker from "./components/kierownik/KierownikEditWorker.jsx";
import MagazynEditClient from "./components/recepcja/RKEditClient.jsx";
import RejestrMagazynowy from "./components/magazyn/RejestrMagazynowy.jsx";
import MagazynEditPart from "./components/magazyn/MagazynEditPart.jsx";
import MagazynZamowienia from "./components/magazyn/MagazynZamowienia.jsx";
import MagazynEditOrder from "./components/magazyn/MagazynEditOrder.jsx";
import MagazynKosztorys from "./components/magazyn/MagazynKosztorys.jsx";
import ZatwierdzanieKosztorysu from "./components/kierownik/ZatwierdzanieKosztorysu.jsx";
import PlanFinansowyFirmy from "./components/kierownik/PlanFinansowyFirmy.jsx";
import RKPlatnosci from "./components/recepcja/RKPlatnosci.jsx";
import RKZlecenia from "./components/recepcja/RKZlecenia.jsx";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route path="/home" element={<MainPage />} />
				<Route path="/mechanik" element={<Mechanik />} />
				<Route path="/magazyn" element={<Magazyn />} />
				<Route path="/kierownik" element={<Kierownik />} />
				<Route path="/recepcja" element={<Recepcja />} />
				<Route path="/rejestrzlecen" element={<RejestrZlecenMechanik />} />
				<Route path="/kosztorysmechanik" element={<KosztorysMechanik />} />
				<Route
					path="/rejestrzlecenmagazyn"
					element={<RejestrZlecenMagazyn />}
				/>
				<Route
					path="/rejestrklientowrecepcja"
					element={<RejestrKlientowRecepcja />}
				/>
				<Route path="/rejestrpracownikow" element={<RejestrPracownikow />} />
				<Route
					path="/edit/:clientId"
					element={<MagazynEditClient onClientUpdated={() => {}} />}
				/>
				<Route
					path="/rejestrzlecenkierownik"
					element={<RejestrZlecenKierownik />}
				/>
				<Route path="/rejestrfinansow" element={<RejestrFinansow />} />
				<Route path="/rejestrmagazynowy" element={<RejestrMagazynowy />} />
				<Route
					path="/editpart/:partId"
					element={<MagazynEditPart onClientUpdated={() => {}} />}
				/>
				<Route path="/magazynzamowienia" element={<MagazynZamowienia />} />
				<Route
					path="/editorder/:orderId"
					element={<MagazynEditOrder onClientUpdated={() => {}} />}
				/>
				<Route
					path="/editworker/:workerId"
					element={<KierownikEditWorker onWorkerUpdated={() => {}} />}
				/>
        <Route path="/rejestrzlecenmechanik" element={<RejestrZlecenMechanik/>} />
				<Route path="/magazynkosztorys" element={<MagazynKosztorys />} />
				<Route
					path="/zatwierdzaniekosztorysu"
					element={<ZatwierdzanieKosztorysu />}
				/>
				<Route path="/planfinansowyfirmy" element={<PlanFinansowyFirmy />} />
				<Route path="/rejestrplatnosci" element={<RKPlatnosci />} />
				<Route path="/rejestrzlecenrecepcja" element={<RKZlecenia />} />
			</Routes>
		</Router>
	);
}

export default App;
