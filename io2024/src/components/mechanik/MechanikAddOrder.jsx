import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const MechanikAddOrder = ({ onOrderAdded }) => {
  const [orderData, setOrderData] = useState({
    nrUsterki: 1,
    nrKatalogowy: '',
    nazwaCzesci: '',
    cenaCzesci: '',
    data: '',
    klientId: '',
  });

  const [clients, setClients] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
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

    fetchData();
  }, []);

  const fetchLatestOrderNumber = async () => {
    try {
      const response = await fetch(
        'https://carmategarage-58a29-default-rtdb.europe-west1.firebasedatabase.app/zlecenia.json'
      );
  
      if (!response.ok) {
        throw new Error('Failed to fetch orders');
      }
  
      const data = await response.json();
  
      if (data) {
        const latestOrder = Object.values(data).reduce((max, order) => (order.nrUsterki >= max ? order.nrUsterki : max), 0);
        setOrderData((prevData) => ({
          ...prevData,
          nrUsterki: latestOrder === 0 ? 1 : latestOrder + 1,
        }));
      }
    } catch (error) {
      console.error('Error fetching latest order number:', error);
    }
  };
  
  useEffect(() => {
    fetchLatestOrderNumber();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddOrder = async () => {
    try {
      const response = await fetch(
        'https://carmategarage-58a29-default-rtdb.europe-west1.firebasedatabase.app/zlecenia.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(orderData),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to add order');
      }

      const data = await response.json();
      const orderId = data.name;

      const updatedClientOrders = [
        ...clients.find((client) => client.id === orderData.klientId)?.zlecenia || [], // Updated this line
        orderId,
      ];

      await fetch(
        `https://carmategarage-58a29-default-rtdb.europe-west1.firebasedatabase.app/clients/${orderData.klientId}.json`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            zlecenia: updatedClientOrders,
          }),
        }
      );

      onOrderAdded();
      // navigate(-1); // Removed this line
    } catch (error) {
      console.error('Error adding order:', error);
    }
  };

  return (
    <div>
      <h1>Dodaj nowe zlecenie</h1>
      <label>
        nrUsterki:
        <input type="text" name="nrUsterki" value={orderData.nrUsterki} onChange={handleChange} disabled />
      </label>
      <label>
        nrKatalogowy:
        <input type="text" name="nrKatalogowy" value={orderData.nrKatalogowy} onChange={handleChange} />
      </label>
      <br />
      <label>
        nazwaCzesci:
        <input type="text" name="nazwaCzesci" value={orderData.nazwaCzesci} onChange={handleChange} />
      </label>
      <label>
        cenaCzesci:
        <input type="text" name="cenaCzesci" value={orderData.cenaCzesci} onChange={handleChange} />
      </label>
      <label>
        Data:
        <input type="date" name="data" value={orderData.data} onChange={handleChange} />
      </label>
      <br />
      <label>
        Wybierz klienta:
        <select name="klientId" value={orderData.klientId} onChange={handleChange}>
          <option value="">Wybierz klienta</option>
          {clients.map((client) => (
            <option key={client.id} value={client.id}>
              {`${client.firstName} ${client.lastName}`}
            </option>
          ))}
        </select>
      </label>
      <br />
      <button onClick={handleAddOrder}>Dodaj zlecenie</button>
    </div>
  );
};

export default MechanikAddOrder;
