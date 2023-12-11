import "../css/Kierownik.css";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { Link, useNavigate } from "react-router-dom";

function Kierownik() {
	return (
		//początek
		<div>
			<div className="Kierownik">
				<h1>Kierownik</h1>
			</div>
			<Link to={"/rejestrzlecenkierownik"}>
				<div>
					<Button type="button">Rejestr zleceń</Button>
				</div>
			</Link>
			<Link to={"/rejestrpracownikow"}>
				<div>
					<Button type="button">Rejestr pracowników</Button>
				</div>
			</Link>
			<Link to={"/rejestrfinansow"}>
				<div>
					<Button type="button">Rejestr finansów</Button>
				</div>
			</Link>
			<br />
			<Link to={"/home"}>
				<div>
					<Button type="button">Powrót do strony głównej</Button>
				</div>
			</Link>
		</div>
	);
}

export default Kierownik;
