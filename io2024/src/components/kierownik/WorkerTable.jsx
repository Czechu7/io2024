import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const WorkerTable = ({ workers, onDeleteWorker }) => {
	return (
		<Table striped hover className="Table">
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
					<th>Akcje</th>
				</tr>
			</thead>
			<tbody>
				{workers.map((worker) => (
					<tr key={worker.id}>
						<td>{worker.id}</td>
						<td>{worker.firstName}</td>
						<td>{worker.lastName}</td>
						<td>{worker.age}</td>
						<td>{worker.position}</td>
						<td>{worker.salary}</td>
						<td>{worker.phoneNumber}</td>
						<td>{worker.email}</td>
						<td>
							<Link to={`/editworker/${worker.id}`}>
								<Button variant="warning">Edytuj</Button>
							</Link>
							<Button
								variant="danger"
								onClick={() => onDeleteWorker(worker.id)}
							>
								Usuń
							</Button>
						</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
};

export default WorkerTable;
