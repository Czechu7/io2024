import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import WorkerTable from "./WorkerTable";
import KierownikAddWorker from "./KierownikAddWorker";
import Button from "react-bootstrap/Button";

const RejestrPracownikow = () => {
	const [workers, setWorkers] = useState([]);
	const history = useNavigate();

	const fetchData = async () => {
		try {
			const response = await fetch(
				"https://carmategarage-58a29-default-rtdb.europe-west1.firebasedatabase.app/Workers.json"
			);

			if (!response.ok) {
				throw new Error("Failed to fetch workers");
			}

			const data = await response.json();

			if (data) {
				const workersArray = Object.keys(data).map((key) => ({
					id: key,
					...data[key],
				}));
				setWorkers(workersArray);
			}
		} catch (error) {
			console.error("Error fetching worker:", error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const handleWorkerAdded = () => {
		fetchData();
	};

	const handleDeleteWorker = async (workerId) => {
		try {
			const response = await fetch(
				`https://carmategarage-58a29-default-rtdb.europe-west1.firebasedatabase.app/Workers/${workerId}.json`,
				{
					method: "DELETE",
				}
			);

			if (!response.ok) {
				throw new Error("Failed to delete worker");
			}

			fetchData(); // Odśwież dane po usunięciu pracownika
		} catch (error) {
			console.error("Error deleting worker:", error);
		}
	};

	return (
		<div className="Kierownik">
			<h1>Rejestr pracowników</h1>
			<WorkerTable workers={workers} onDeleteWorker={handleDeleteWorker} />

			<KierownikAddWorker onWorkerAdded={handleWorkerAdded} />
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
};

export default RejestrPracownikow;
