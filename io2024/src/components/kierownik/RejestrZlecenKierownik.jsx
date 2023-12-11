import { Link, useNavigate } from "react-router-dom";
import "../../css/RejestrZlecenKierownik.css";
import Button from "react-bootstrap/Button";

function RejestrZlecenKierownik() {
	return (
		<div>
			<div className="RejestrZlecenKierownik">
				<h1>Rejestr Zleceń</h1>
			</div>
			<Link to={"/zamowioneczesci"}>
				<div>
					<Button type="button">Zamówione części</Button>
				</div>
			</Link>
			<Link to={"/historiazlecen"}>
				<div>
					<Button type="button">Historia zleceń</Button>
				</div>
			</Link>
			<Link to={"/dodanienowegozlecenia"}>
				<div>
					<Button type="button">Dodanie nowego zlecenia</Button>
				</div>
			</Link>
			<br />
			<Link to={"/kierownik"}>
				<div>
					<Button type="button">Powrót do kierownika</Button>
				</div>
			</Link>
			<Link to={"/home"}>
				<div>
					<Button type="button">Strona Główna</Button>
				</div>
			</Link>
		</div>
	);
}

export default RejestrZlecenKierownik;
