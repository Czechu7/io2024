import "../css/Kierownik.css";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { Link, useNavigate } from "react-router-dom";
import KierownikHeader from "./kierownik/KierownikHeader";

function Kierownik() {
	return (
		//początek
		<div>
				<KierownikHeader></KierownikHeader>
				<div className="MainPage">
			<div className="ButtonContainer">
						<Button className="Button" type="submit" href="rejestrzlecenkierownik">Rejestr zleceń
				</Button>

				<Button className="Button" type="submit" href="rejestrpracownikow">
				Rejestr pracowników
				</Button>

				<Button className="Button" type="submit" href="rejestrfinansow">
				Rejestr finansów
				</Button>
				</div>
			</div>
		</div>
	);
}

export default Kierownik;
