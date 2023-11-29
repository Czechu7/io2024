import "../css/Kierownik.css";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

function Kierownik() {
	return (
		//początek
		<div>
			<div className="Kierownik">
				<h1>Kierownik</h1>
			</div>
			<div>
				<Button type="submit" href="/rejestrzlecenkierownik">
					Rejestr Zleceń
				</Button>
			</div>
			<div>
				<Button type="submit" href="/rejestrpracownikow">
					Rejestr Pracowników
				</Button>
			</div>
			<div>
				<Button type="submit" href="/rejestrfinansow">
					Rejestr Finansów
				</Button>
			</div>
		</div>
	);
}

export default Kierownik;
