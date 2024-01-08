import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../../css/ZatwierdzanieKosztorysu.css";
import KierownikHeader from "./KierownikHeader";

function ZatwierdzanieKosztorysu() {
	const [approvedItems, setApprovedItems] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [kosztorys, setKosztorys] = useState([
		{ lp: 1, nazwa: "Bulbulator", cena: 1200, ilosc: 3, status: "Oczekujący" },
		{
			lp: 2,
			nazwa: "Koło zapasowe 16 cali",
			cena: 200,
			ilosc: 3,
			status: "Zatwierdzony",
		},
		{
			lp: 3,
			nazwa: "Świeca żarowa",
			cena: 300,
			ilosc: 2,
			status: "Oczekujący",
		},
		{
			lp: 4,
			nazwa: "Olej do skrzyni automatycznej",
			cena: 1000,
			ilosc: 5,
			status: "Zatwierdzony",
		},
		{ lp: 5, nazwa: "Akumulator", cena: 800, ilosc: 1, status: "Oczekujący" },
		// Dodaj więcej danych kosztorysu
	]);

	const handleApprovalToggle = (lp) => {
		const approvedItemsCopy = [...approvedItems];

		if (approvedItemsCopy.includes(lp)) {
			// Jeśli już jest zatwierdzony, usuń z listy zatwierdzonych
			setApprovedItems(approvedItemsCopy.filter((item) => item !== lp));
		} else {
			// W przeciwnym razie dodaj do listy zatwierdzonych
			setApprovedItems([...approvedItemsCopy, lp]);
		}
	};

	const handleSearchTermChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const getStatus = (lp) => {
		return approvedItems.includes(lp) ? "Zatwierdzony" : "Oczekujący";
	};

	const filteredKosztorys = kosztorys.filter((item) =>
		item.nazwa.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<div className="ZatwierdzanieKosztorysu">
			<KierownikHeader></KierownikHeader>
			<h1>Kosztorys</h1>
			{/* Wyszukiwarka */}
			<input
				type="text"
				value={searchTerm}
				onChange={handleSearchTermChange}
				placeholder="Wyszukaj część"
			/>

			{/* Tabela z danymi kosztorysu */}
			<table>
				<thead>
					<tr>
						<th>Lp.</th>
						<th>Nazwa części</th>
						<th>Cena</th>
						<th>Ilość</th>
						<th>Status zamówienia</th>
						<th>Zatwierdzenie</th>
					</tr>
				</thead>
				<tbody>
					{filteredKosztorys.map((item) => (
						<tr key={item.lp}>
							<td>{item.lp}</td>
							<td>{item.nazwa}</td>
							<td>{item.cena}</td>
							<td>{item.ilosc}</td>
							<td>{getStatus(item.lp)}</td>
							<td>
								<label>
									<input
										type="checkbox"
										checked={approvedItems.includes(item.lp)}
										onChange={() => handleApprovalToggle(item.lp)}
									/>
									Zatwierdź
								</label>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			{/* Przycisk "Prześlij" po zatwierdzeniu */}
			{approvedItems.length > 0 && (
				<button className="btnm" id="przeslij-button">
					Prześlij
				</button>
			)}

			{/* Przyciski na dole strony */}
			<div className="PrzyciskiDolStrony">
				<Link to={"/rejestrfinansow"}>
					<div>
						<Button type="button">Powrót do rejestru finansów</Button>
					</div>
				</Link>
				<Link to={"/home"}>
					<div>
						<Button type="button">Strona Główna</Button>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default ZatwierdzanieKosztorysu;
