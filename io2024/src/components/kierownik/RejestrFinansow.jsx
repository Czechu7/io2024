import "../../css/RejestrFinansow.css";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";

function RejestrFinansow() {
	return (
		<div>
			<div className="RejestrFinansow">
				<h1>Rejestr Finansów</h1>
			</div>
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

export default RejestrFinansow;
