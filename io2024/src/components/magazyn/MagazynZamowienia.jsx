import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import '../../css/magazyn/RejestrMagazynowy.css';
import MagazynHeader from './MagazynHeader';
import MagazynAddOrder from './MagazynAddOrder';

function MagazynZamowienia() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  const [itemOrder, setItemOrder] = useState({});

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

  const handleDeleteOrder = async (orderId) => {
    try {
      const response = await fetch(
        `https://carmategarage-58a29-default-rtdb.europe-west1.firebasedatabase.app/zamowienia/${orderId}.json`,
        {
          method: 'DELETE',
        }
      );

      if (!response.ok) {
        throw new Error('Failed to delete order');
      }

      // Poczekaj na zakończenie usuwania, zanim zaktualizujesz stan
      await response.json();

      // Odśwież dane
      fetchData();
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  const handleEditOrderStatus = async (orderId) => {
    try {
      const orderToUpdate = orders.find((order) => order.id === orderId);

      if (!orderToUpdate) {
        throw new Error('Order not found');
      }

      const newOrderStatus = orderToUpdate.orderStatus === 'Zamówione' ? 'Odebrane' : 'Zamówione';

      const response = await fetch(
        `https://carmategarage-58a29-default-rtdb.europe-west1.firebasedatabase.app/zamowienia/${orderId}.json`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ orderStatus: newOrderStatus }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to update order status');
      }

      // Poczekaj na zakończenie aktualizacji, zanim zaktualizujesz stan
      await response.json();

      // Odśwież dane
      fetchData();
    } catch (error) {
      console.error('Error updating order status:', error);
    }
  };

  const handleOrderAdded = () => {
    fetchData();
  };


  return (
    <div className="Magazyn">
      <MagazynHeader></MagazynHeader>
      <Table striped hover className="Table">
        <thead>
          <tr>
            <th>Lp.</th>
            <th>Nazwa części</th>
            <th>Cena</th>
            <th>Ilość</th>
            <th>Status zamówienia</th>
            <th>Akcje</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{itemOrder[order.id]}</td>
              <td>{order.partName}</td>
              <td>{order.price}</td>
              <td>{order.quantity}</td>
              <td>{order.orderStatus}</td>
              <td>
                <Button variant="danger" onClick={() => handleDeleteOrder(order.id)}>
                  Usuń
                </Button>
                <Button variant="warning" onClick={() => handleEditOrderStatus(order.id)}>
                  Edytuj status
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <MagazynAddOrder onOrderAdded={handleOrderAdded} />
      <div>
        <Button type="button" onClick={() => navigate('/home')}>
          Strona Główna
        </Button>
      </div>
    </div>
  );
}

export default MagazynZamowienia;
