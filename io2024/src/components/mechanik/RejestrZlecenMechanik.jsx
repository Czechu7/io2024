import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import MechanikAddOrder from './MechanikAddOrder';

function RejestrZlecenMechanik() {
  const [orders, setOrders] = useState([]);
  const [clientsData, setClientsData] = useState({});

  const fetchData = async () => {
    try {
      // Fetch zlecenia
      const ordersResponse = await fetch(
        'https://carmategarage-58a29-default-rtdb.europe-west1.firebasedatabase.app/zlecenia.json'
      );

      if (!ordersResponse.ok) {
        throw new Error('Failed to fetch orders');
      }

      const ordersData = await ordersResponse.json();

      if (ordersData) {
        const ordersArray = Object.keys(ordersData).map((key) => ({
          id: key,
          ...ordersData[key],
        }));
        setOrders(ordersArray);
      }

      // Fetch dane klientów
      const clientsResponse = await fetch(
        'https://carmategarage-58a29-default-rtdb.europe-west1.firebasedatabase.app/clients.json'
      );

      if (!clientsResponse.ok) {
        throw new Error('Failed to fetch clients');
      }

      const clientsData = await clientsResponse.json();

      if (clientsData) {
        setClientsData(clientsData);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Dodaj pustą zależność, aby useEffect wykonał się tylko raz

  const onOrderAdded = () => {
    fetchData(); // Wywołaj funkcję fetcha po dodaniu nowego zlecenia
  };

  return (
    <div className="Table">
      <h1>Rejestr Zleceń Mechanika</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>nrUsterki</th>
            <th>nrKatalogowy</th>
            <th>nazwaCzesci</th>
            <th>cenaCzesci</th>
            <th>Data</th>
            <th>imieNazwisko</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            const clientData = clientsData[order.klientId] || {};
            return (
              <tr key={order.id}>
                <td>{order.nrUsterki}</td>
                <td>{order.nrKatalogowy}</td>
                <td>{order.nazwaCzesci}</td>
                <td>{order.cenaCzesci}</td>
                <td>{order.data}</td>
                <td>{`${clientData.firstName || ''} ${clientData.lastName || ''}`}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Button type="submit" href="/">
        Powrót
      </Button>{' '}
      <MechanikAddOrder onOrderAdded={onOrderAdded} />
    </div>
  );
}

export default RejestrZlecenMechanik;
