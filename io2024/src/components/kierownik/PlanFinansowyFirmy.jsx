import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "../../css/PlanFinansowyFirmy.css";
import KierownikHeader from "./KierownikHeader";

function PlanFinansowyFirmy() {
	// Stany do śledzenia danych
	const [przychodyzezlecen, setPrzychodyZeZlecen] = useState(0);
	const [inneKoszty, setInneKoszty] = useState(0);
	const [kosztyCzesci, setKosztyCzesci] = useState(0);
	const [kosztyPracownikow, setKosztyPracownikow] = useState(0);
	const [kosztyKurierskie, setKosztyKurierskie] = useState(0);
	const [kosztyNarzedzi, setKosztyNarzedzi] = useState(0);
	const [zatwierdzony, setZatwierdzony] = useState(false);
	const [waluta, setWaluta] = useState("zł");
	const [approved, setApproved] = useState(false);

	// Obliczenia
	const zyskPrzedOpodatkowaniem =
		przychodyzezlecen -
		inneKoszty -
		kosztyCzesci -
		kosztyPracownikow -
		kosztyKurierskie -
		kosztyNarzedzi;
	const podatek = zyskPrzedOpodatkowaniem * 0.19;
	const zyskNetto = zyskPrzedOpodatkowaniem - podatek;

	// Obsługa zdarzenia dla zmiany wartości przychodów
	const handlePrzychodyZeZlecenChange = (e) => {
		const newValue = Math.max(0, Number(e.target.value));
		setPrzychodyZeZlecen(newValue);
	};

	// Obsługa zdarzenia dla zmiany wartości kosztów za części
	const handleKosztyCzesciChange = (e) => {
		const newValue = Math.max(0, Number(e.target.value));
		setKosztyCzesci(newValue);
	};

	// Obsługa zdarzenia dla zmiany wartości kosztów pracowników
	const handleKosztyPracownikowChange = (e) => {
		const newValue = Math.max(0, Number(e.target.value));
		setKosztyPracownikow(newValue);
	};

	// Obsługa zdarzenia dla zmiany wartości kosztów narzędzi
	const handleKosztyNarzedziChange = (e) => {
		const newValue = Math.max(0, Number(e.target.value));
		setKosztyNarzedzi(newValue);
	};

	// Obsługa zdarzenia dla zmiany wartości kosztów kurierskich
	const handleKosztyKurierskieChange = (e) => {
		const newValue = Math.max(0, Number(e.target.value));
		setKosztyKurierskie(newValue);
	};

	// Obsługa zdarzenia dla zmiany wartości innych kosztów
	const handleInneKosztyChange = (e) => {
		const newValue = Math.max(0, Number(e.target.value));
		setInneKoszty(newValue);
	};

	// Sekcja Zysk i Podatek
	const sectionZyskPodatek = (
		<section>
			<h2>Zysk i Podatek</h2>
			<p>
				Zysk przed opodatkowaniem: {zyskPrzedOpodatkowaniem} {waluta}
			</p>
			<p>
				Podatek (19%): {podatek} {waluta}
			</p>
			<p>
				Zysk netto: {zyskNetto} {waluta}
			</p>
		</section>
	);

	// Przycisk "Prześlij" po zatwierdzeniu
	const buttonPrzeslij =
		zatwierdzony && !approved ? (
			<button className="btnm" id="przeslij-button">
				Prześlij
			</button>
		) : null;

	return (
		<div className="PlanFinansowy">
			<KierownikHeader></KierownikHeader>
			<h1>Plan Finansowy Firmy</h1>

			{/* Sekcja Przychody */}
			<section>
				<h2>Przychody ze zleceń</h2>
				<input
					type="number"
					value={przychodyzezlecen}
					onChange={handlePrzychodyZeZlecenChange}
				/>
			</section>

			{/* Sekcja Koszty za Części */}
			<section>
				<h2>Koszty za części</h2>
				<input
					type="number"
					value={kosztyCzesci}
					onChange={handleKosztyCzesciChange}
				/>
			</section>

			{/* Sekcja Koszty za narzędzia */}
			<section>
				<h2>Koszty za narzędzia</h2>
				<input
					type="number"
					value={kosztyNarzedzi}
					onChange={handleKosztyNarzedziChange}
				/>
			</section>

			{/* Sekcja Koszty Pracowników */}
			<section>
				<h2>Koszty pracowników</h2>
				<input
					type="number"
					value={kosztyPracownikow}
					onChange={handleKosztyPracownikowChange}
				/>
			</section>

			<section>
				<h2>Koszty za usługi kurierskie</h2>
				<input
					type="number"
					value={kosztyKurierskie}
					onChange={handleKosztyKurierskieChange}
				/>
			</section>

			<section>
				<h2>Inne koszty</h2>
				<input
					type="number"
					value={inneKoszty}
					onChange={handleInneKosztyChange}
				/>
			</section>

			{/* ... (powtórz dla innych pól) */}

			{/* Sekcja Dodatkowe Informacje */}
			<section>
				<h2>Dodatkowe Informacje</h2>
				<label>
					<input
						type="checkbox"
						checked={zatwierdzony}
						onChange={() => setZatwierdzony(!zatwierdzony)}
					/>
					Zatwierdzam plan finansowy
				</label>
				<br />
				<label>
					Waluta:
					<input
						type="text"
						value={waluta}
						onChange={(e) => setWaluta(e.target.value)}
					/>
				</label>
			</section>

			{/* Sekcja Zysk i Podatek */}
			{sectionZyskPodatek}

			{/* Przycisk "Prześlij" po zatwierdzeniu */}
			{buttonPrzeslij}

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

export default PlanFinansowyFirmy;
