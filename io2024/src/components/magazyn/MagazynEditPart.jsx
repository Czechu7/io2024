import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MagazynEditPart = ({ onPartUpdated }) => {
  const { partId } = useParams();
  const navigate = useNavigate();
  const [partData, setPartData] = useState({
    partName: '',
    price: '',
    quantity: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://carmategarage-58a29-default-rtdb.europe-west1.firebasedatabase.app/czesci/${partId}.json`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch part');
        }

        const data = await response.json();

        if (data) {
          setPartData(data);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [partId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPartData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdatePart = async () => {
    try {
      const response = await fetch(
        `https://carmategarage-58a29-default-rtdb.europe-west1.firebasedatabase.app/czesci/${partId}.json`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(partData),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to update part');
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
      <h1>Edycja części</h1>
      <label>
        Nazwa części:
        <input type="text" name="partName" value={partData.partName} onChange={handleChange} />
      </label>
      <br />
      <label>
        Cena:
        <input type="text" name="price" value={partData.price} onChange={handleChange} />
      </label>
      <br />
      <label>
        Ilość:
        <input type="text" name="quantity" value={partData.quantity} onChange={handleChange} />
      </label>
      <br />
      <button onClick={handleUpdatePart}>Zapisz zmiany</button>
    </div>
  );
};

export default MagazynEditPart;
