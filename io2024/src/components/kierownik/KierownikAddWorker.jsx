import { useState } from "react";

const KierownikAddWorker = ({ onWorkerAdded }) => {
	const [newWorker, setNewWorker] = useState({
		firstName: "",
		lastName: "",
		dateofbirth: "",
		position: "",
		salary: "",
		phoneNumber: "",
		email: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setNewWorker((prevWorker) => ({
			...prevWorker,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			// Dodaj nowego pracownika do Realtime Database
			const response = await fetch(
				"https://carmategarage-58a29-default-rtdb.europe-west1.firebasedatabase.app/Workers.json",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(newWorker),
				}
			);

			if (!response.ok) {
				throw new Error("Failed to add worker");
			}

			// Zresetuj formularz po dodaniu klienta
			setNewWorker({
				firstName: "",
				lastName: "",
				dateofbirth: "",
				position: "",
				salary: "",
				phoneNumber: "",
				email: "",
			});

			// Aktualizuj dane w komponencie nadrzędnym
			if (onWorkerAdded) {
				onWorkerAdded();
			}
		} catch (error) {
			console.error("Error adding worker:", error);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Imię:
				<input
					type="text"
					name="firstName"
					value={newWorker.firstName}
					onChange={handleChange}
					required
				/>
			</label>
			<br />
			<label>
				Nazwisko:
				<input
					type="text"
					name="lastName"
					value={newWorker.lastName}
					onChange={handleChange}
					required
				/>
			</label>
			<br />
			<label>
				Data urodzenia:
				<input
					type="text"
					name="dateofbirth"
					value={newWorker.dateofbirth}
					onChange={handleChange}
					required
				/>
			</label>
			<br />
			<label>
				Stanowisko:
				<input
					type="text"
					name="position"
					value={newWorker.position}
					onChange={handleChange}
					required
				/>
			</label>
			<br />
			<label>
				Wynagrodzenie:
				<input
					type="text"
					name="salary"
					value={newWorker.salary}
					onChange={handleChange}
					required
				/>
			</label>
			<br />
			<label>
				Numer telefonu:
				<input
					type="tel"
					name="phoneNumber"
					value={newWorker.phoneNumber}
					onChange={handleChange}
					required
				/>
			</label>
			<br />
			<label>
				E-mail:
				<input
					type="email"
					name="email"
					value={newWorker.email}
					onChange={handleChange}
					required
				/>
			</label>
			<br />
			<button type="submit">Dodaj pracownika</button>
		</form>
	);
};

export default KierownikAddWorker;
