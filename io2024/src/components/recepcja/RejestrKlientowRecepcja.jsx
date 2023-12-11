import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import RKAddClient from './RKAddClient';


function RejestrKlientowRecepcja() {
  const [clients, setClients] = useState([]);
  const history = useNavigate();

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://carmategarage-58a29-default-rtdb.europe-west1.firebasedatabase.app/clients.json'
      );

      if (!response.ok) {
        throw new Error('Failed to fetch clients');
      }

      const data = await response.json();

      if (data) {
        const clientsArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setClients(clientsArray);
      }
    } catch (error) {
      console.error('Error fetching clients:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClientAdded = () => {
    fetchData();
  };

  const handleDeleteClient = async (clientId) => {
    try {
      const response = await fetch(
        `https://carmategarage-58a29-default-rtdb.europe-west1.firebasedatabase.app/clients/${clientId}.json`,
        {
          method: 'DELETE',
        }
      );

      if (!response.ok) {
        throw new Error('Failed to delete client');
      }

      fetchData(); // Odśwież dane po usunięciu klienta
    } catch (error) {
      console.error('Error deleting client:', error);
    }
  };

  return (
    <div className="Recepcja">
      <h1>Rejestr klientów</h1>
      <Table striped  hover className="Table">
        <thead>
          <tr>
            <th>#</th>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>Numer telefonu</th>
            <th>E-mail</th>
            <th>Akcje</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td>{client.id}</td>
              <td>{client.firstName}</td>
              <td>{client.lastName}</td>
              <td>{client.phoneNumber}</td>
              <td>{client.email}</td>
              <td>
                <Link to={`/edit/${client.id}`}>
                  <Button variant="warning">Edytuj</Button>
                </Link>
                <Button variant="danger" onClick={() => handleDeleteClient(client.id)}>
                  Usuń
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      
      <RKAddClient onClientAdded={handleClientAdded} />
<br></br>
      <div>
        <Button type="button" onClick={() => history.push('/recepcja')}>
          Powrót do recepcji
        </Button>
      </div>
      <div>
        <Button type="button" onClick={() => history.push('/')}>
          Strona Główna
        </Button>
      </div>
    </div>
  );
}

export default RejestrKlientowRecepcja;
