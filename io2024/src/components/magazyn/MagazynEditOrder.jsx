import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MagazynEditOrder = ({ onOrderUpdated }) => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [orderData, setOrderData] = useState({
    partName: '',
    price: '',
    quantity: '',
    orderStatus: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://carmategarage-58a29-default-rtdb.europe-west1.firebasedatabase.app/zamowienia/${orderId}.json`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch order');
        }

        const data = await response.json();

        if (data) {
          setOrderData(data);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [orderId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdateOrder = async () => {
    try {
      const response = await fetch(
        `https://carmategarage-58a29-default-rtdb.europe-west1.firebasedatabase.app/zamowienia/${orderId}.json`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(orderData),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to update order');
      }

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
      <h1>Edycja zamówienia</h1>
      <label>
        Nazwa części:
        <input type="text" name="partName" value={orderData.partName} onChange={handleChange} />
      </label>
      <br />
      <label>
        Cena:
        <input type="text" name="price" value={orderData.price} onChange={handleChange} />
      </label>
      <br />
      <label>
        Ilość:
        <input type="text" name="quantity" value={orderData.quantity} onChange={handleChange} />
      </label>
      <br />
      <label>
        Status zamówienia:
        <input type="text" name="orderStatus" value={orderData.orderStatus} onChange={handleChange} />
      </label>
      <br />
      <button onClick={handleUpdateOrder}>Zapisz zmiany</button>
    </div>
  );
};

export default MagazynEditOrder;
