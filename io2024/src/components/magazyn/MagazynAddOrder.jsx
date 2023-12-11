import React, { useState } from 'react';

const MagazynAddOrder = ({ onOrderAdded }) => {
  const [newOrder, setNewOrder] = useState({
    partName: '',
    price: '',
    quantity: '',
    orderStatus: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewOrder((prevOrder) => ({
      ...prevOrder,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Dodaj nowe zamówienie do Realtime Database
      const response = await fetch(
        'https://carmategarage-58a29-default-rtdb.europe-west1.firebasedatabase.app/zamowienia.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newOrder),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to add order');
      }

      // Zresetuj formularz po dodaniu zamówienia
      setNewOrder({
        partName: '',
        price: '',
        quantity: '',
        orderStatus: '',
      });

      // Aktualizuj dane w komponencie nadrzędnym
      if (onOrderAdded) {
        onOrderAdded();
      }
    } catch (error) {
      console.error('Error adding order:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nazwa części:
        <input
          type="text"
          name="partName"
          value={newOrder.partName}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Cena:
        <input
          type="text"
          name="price"
          value={newOrder.price}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Ilość:
        <input
          type="text"
          name="quantity"
          value={newOrder.quantity}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Status zamówienia:
        <select
          name="orderStatus"
          value={newOrder.orderStatus}
          onChange={handleChange}
          required
        >
          <option value="">Wybierz status</option>
          <option value="Zamówione">Zamówione</option>
          <option value="Odebrane">Odebrane</option>
        </select>
      </label>
      <br />
      <button type="submit">Dodaj zamówienie</button>
    </form>
  );
};

export default MagazynAddOrder;
