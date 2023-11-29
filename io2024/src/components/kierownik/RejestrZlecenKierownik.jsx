import "../../css/RejestrZlecenKierownik.css";
import Button from "react-bootstrap/Button";

function RejestrZlecenKierownik() {
	return (
		<div>
			<div className="RejestrZlecenKierownik">
				<h1>Rejestr Zleceń</h1>
			</div>
			<div>
				<Button type="submit" href="/zamowioneczesci">
					Zamówione części
				</Button>
			</div>
			<div>
				<Button type="submit" href="/historiazlecen">
					Historia zleceń
				</Button>
			</div>
			<div>
				<Button type="submit" href="/dodanienowegozlecenia">
					Dodanie nowego zlecenia
				</Button>
			</div>
			<Button type="submit" href="/">
				Strona główna
			</Button>{" "}
		</div>
	);
}

export default RejestrZlecenKierownik;
