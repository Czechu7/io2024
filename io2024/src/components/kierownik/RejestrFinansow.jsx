import "../../css/RejestrFinansow.css";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import KierownikHeader from "./KierownikHeader";

function RejestrFinansow() {
	return (
		<div>
			<div className="RejestrFinansow">
				<KierownikHeader></KierownikHeader>
				<h1>Rejestr finansów</h1>
			</div>
			<Link to={"/zatwierdzaniekosztorysu"}>
				<div>
					<Button type="button">Zatwierdzanie kosztorysu</Button>
				</div>
			</Link>
			<Link to={"/planfinansowyfirmy"}>
				<div>
					<Button type="button">Plan finansowy firmy</Button>
				</div>
			</Link>
			<br></br>
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
