import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import '../../css/magazyn/RejestrMagazynowy.css';
import MagazynHeader from './MagazynHeader';

function MagazynKosztorys() {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [itemOrder, setItemOrder] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [newPartName, setNewPartName] = useState('');
  const [newPartPrice, setNewPartPrice] = useState('');
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://carmategarage-58a29-default-rtdb.europe-west1.firebasedatabase.app/zamowienia.json'
      );

      if (!response.ok) {
        throw new Error('Failed to fetch orders');
      }

      const data = await response.json();

      if (data) {
        const ordersArray = Object.keys(data).map((key, index) => ({
          id: key,
          order: index + 1,
          ...data[key],
        }));

        setOrders(ordersArray);
        setFilteredOrders(ordersArray);

        // Aktualizuj stan z kolejnością
        const orderData = {};
        ordersArray.forEach((order) => {
          orderData[order.id] = order.order;
        });
        setItemOrder(orderData);
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOrderAdded = () => {
    fetchData();
  };

  useEffect(() => {
    // Filtruj zamówienia po nazwie części lub statusie
    const filtered = orders.filter(
      (order) =>
        order.partName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.orderStatus.trim().toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredOrders(filtered);
  }, [searchTerm, orders]);

  const handleNewPartNameChange = (e) => {
    setNewPartName(e.target.value);
  };

  const handleNewPartPriceChange = (e) => {
    setNewPartPrice(e.target.value);
  };

  const handleSend = () => {
    // Tutaj możesz dodać logikę przesyłania nowej części
    // Pamiętaj, że ten przycisk obecnie nie robi nic
    console.log(`Wysyłam nową część: ${newPartName} - Cena: ${newPartPrice}`);
  
    // Po obsłużeniu logiki, zresetuj stany do pustych wartości
    setNewPartName('');
    setNewPartPrice('');
  };

  return (
    <div className="Magazyn">
      <MagazynHeader></MagazynHeader>
      <div>
        <label>
          Szukaj części (nazwa lub status):<br></br>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
      </div>
      <Table striped hover className="Table">
        <thead>
          <tr>
            <th>Lp.</th>
            <th>Nazwa części</th>
            <th>Cena</th>
            <th>Ilość</th>
            <th>Status zamówienia</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order) => (
            <tr key={order.id}>
              <td>{itemOrder[order.id]}</td>
              <td>{order.partName}</td>
              <td>{order.price}</td>
              <td>{order.quantity}</td>
              <td>{order.orderStatus}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
        <label>
          Nazwa części do kosztorysu:<br></br>
          <input
            type="text"
            value={newPartName}
            onChange={handleNewPartNameChange}
          />
        </label>
        <br />
        <label>
          Cena części do kosztorysu:<br></br>
          <input
            type="text"
            value={newPartPrice}
            onChange={handleNewPartPriceChange}
          />
        </label>
        <br />
        {/* Przycisk "Prześlij", który nic nie robi */}
        <Button type="button" onClick={() => { handleSend(); setNewPartName(''); setNewPartPrice(''); }}>
            Prześlij
        </Button>
        <br />
        <Button type="button" onClick={() => navigate('/magazyn')}>
          Strona Główna
        </Button>
      </div>
    </div>
  );
}

export default MagazynKosztorys;
