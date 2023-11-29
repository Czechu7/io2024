import "../../css/RejestrPracownikow.css";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/esm/Table";

function RejestrPracownikow() {
	return (
		<div>
			<div className="RejestrPracownikow">
				<h1>Rejestr Pracowników</h1>
			</div>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>#</th>
						<th>Imię</th>
						<th>Nazwisko</th>
						<th>Wiek</th>
						<th>Stanowisko</th>
						<th>Wynagrodzenie</th>
						<th>Numer telefonu</th>
						<th>E-mail</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Andrzej</td>
						<td>Jankowski</td>
						<td>40</td>
						<td>mechanik</td>
						<td>5400 zł brutto</td>
						<td>528990527</td>
						<td>andrzejek77@onet.pl</td>
					</tr>
					<tr>
						<td>2</td>
						<td>Maciej</td>
						<td>Kowalik</td>
						<td>35</td>
						<td>mechanik</td>
						<td>4500 zł brutto</td>
						<td>733636527</td>
						<td>maciekkowalik@gmail.com</td>
					</tr>
					<tr>
						<td>3</td>
						<td>Patrycja</td>
						<td>Smutowska</td>
						<td>22</td>
						<td>recepcjonistka</td>
						<td>4300 zł brutto</td>
						<td>723467767</td>
						<td>patrycja02@interia.pl</td>
					</tr>
					<tr>
						<td>4</td>
						<td>Kamil</td>
						<td>Drożdzek</td>
						<td>22</td>
						<td>magazynier</td>
						<td>4700 zł brutto</td>
						<td>822421767</td>
						<td>kamilek01@o2.pl</td>
					</tr>
				</tbody>
			</Table>

			<div>
				<Button type="submit" href="/kierownik">
					Kierownik
				</Button>
			</div>
			<div>
				<Button type="submit" href="/">
					Strona Główna
				</Button>
			</div>
		</div>
	);
}

export default RejestrPracownikow;
