import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import MechanikAddOrder from './MechanikAddOrder';

function RejestrZlecen() {
  const [orders, setOrders] = useState([]);
  const [clientsData, setClientsData] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

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
  }, []); 

  const onOrderAdded = () => {
    fetchData();
  };

  const deleteOrder = async (orderId) => {
    try {
      await fetch(
        `https://carmategarage-58a29-default-rtdb.europe-west1.firebasedatabase.app/zlecenia/${orderId}.json`,
        {
          method: 'DELETE',
        }
      );
      fetchData();
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  const editOrder = (orderId) => {
    // Implementuj funkcję modyfikacji zlecenia
    // Możesz użyć lokalnego stanu, modala lub nowej strony do edycji.
  };

  const filterOrders = () => {
    return orders.filter((order) => {
      const clientData = clientsData[order.klientId] || {};
      const searchRegex = new RegExp(searchTerm, 'i');
      return (
        searchRegex.test(order.nrUsterki) ||
        searchRegex.test(order.nrKatalogowy) ||
        searchRegex.test(order.nazwaCzesci) ||
        searchRegex.test(order.cenaCzesci.toString()) ||
        searchRegex.test(order.data) ||
        searchRegex.test(`${clientData.firstName} ${clientData.lastName}`)
      );
    });
  };

  return (
    <div className="Table text-center">
      <div>
        <label htmlFor="search">Wyszukaj: </label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button onClick={() => setSearchTerm('')}>Wyczyść</Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Numer usterki</th>
            <th>Numer katalogowy</th>
            <th>Nazwa części</th>
            <th>Cena części</th>
            <th>Data</th>
            <th>Imię i nazwisko</th>
            <th>Akcje</th>
          </tr>
        </thead>
        <tbody>
          {filterOrders().map((order) => {
            const clientData = clientsData[order.klientId] || {};
            return (
              <tr key={order.id}>
                <td>{order.nrUsterki}</td>
                <td>{order.nrKatalogowy}</td>
                <td>{order.nazwaCzesci}</td>
                <td>{order.cenaCzesci}</td>
                <td>{order.data}</td>
                <td>{`${clientData.firstName || ''} ${clientData.lastName || ''}`}</td>
                <td>
                  <Button variant="danger" onClick={() => deleteOrder(order.id)}>
                    Usuń
                  </Button>{' '}
                  <Button variant="info" onClick={() => editOrder(order.id)}>
                    Edytuj
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <MechanikAddOrder onOrderAdded={onOrderAdded} />
    </div>
  );
}

export default RejestrZlecen;
