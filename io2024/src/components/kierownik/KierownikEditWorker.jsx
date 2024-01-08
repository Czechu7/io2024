import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const KierownikEditWorker = ({ onWorkerUpdated }) => {
	const { workerId } = useParams();
	const navigate = useNavigate();
	const [workerData, setWorkerData] = useState({
		firstName: "",
		lastName: "",
		dateofbirth: "",
		position: "",
		salary: "",
		phoneNumber: "",
		email: "",
	});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`https://carmategarage-58a29-default-rtdb.europe-west1.firebasedatabase.app/Workers/${workerId}.json`
				);

				if (!response.ok) {
					throw new Error("Failed to fetch worker");
				}

				const data = await response.json();

				if (data) {
					setWorkerData(data);
				}
			} catch (error) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [workerId]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setWorkerData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleUpdateWorker = async () => {
		try {
			const response = await fetch(
				`https://carmategarage-58a29-default-rtdb.europe-west1.firebasedatabase.app/Workers/${workerId}.json`,
				{
					method: "PATCH",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(workerData),
				}
			);

			if (!response.ok) {
				throw new Error("Failed to update worker");
			}

			onWorkerUpdated(); // Informujemy o aktualizacji klienta
			navigate(-1); // Powrót do poprzedniej lokalizacji
		} catch (error) {
			setError(error.message);
		}
	};

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<div>
			<h1>Edycja pracownika</h1>
			<label>
				Imię:
				<input
					type="text"
					name="firstName"
					value={workerData.firstName}
					onChange={handleChange}
				/>
			</label>
			<br />
			<label>
				Nazwisko:
				<input
					type="text"
					name="lastName"
					value={workerData.lastName}
					onChange={handleChange}
				/>
			</label>
			<br />
			<label>
				Data urodzenia:
				<input
					type="text"
					name="dateofbirth"
					value={workerData.dateofbirth}
					onChange={handleChange}
				/>
			</label>
			<br />
			<label>
				Stanowisko:
				<input
					type="text"
					name="position"
					value={workerData.position}
					onChange={handleChange}
				/>
			</label>
			<br />
			<label>
				Wynagrodzenie:
				<input
					type="text"
					name="salary"
					value={workerData.salary}
					onChange={handleChange}
				/>
			</label>
			<br />
			<label>
				Numer telefonu:
				<input
					type="tel"
					name="phoneNumber"
					value={workerData.phoneNumber}
					onChange={handleChange}
				/>
			</label>
			<br />
			<label>
				E-mail:
				<input
					type="email"
					name="email"
					value={workerData.email}
					onChange={handleChange}
				/>
			</label>
			<br />
			<button onClick={handleUpdateWorker}>Zapisz zmiany</button>
		</div>
	);
};

export default KierownikEditWorker;
