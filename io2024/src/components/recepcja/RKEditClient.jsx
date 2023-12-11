import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const RKEditClient = ({ onClientUpdated }) => {
  const { clientId } = useParams();
  const navigate = useNavigate();
  const [clientData, setClientData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://carmategarage-58a29-default-rtdb.europe-west1.firebasedatabase.app/clients/${clientId}.json`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch client');
        }

        const data = await response.json();

        if (data) {
          setClientData(data);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [clientId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClientData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdateClient = async () => {
    try {
      const response = await fetch(
        `https://carmategarage-58a29-default-rtdb.europe-west1.firebasedatabase.app/clients/${clientId}.json`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(clientData),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to update client');
      }

      onClientUpdated(); // Informujemy o aktualizacji klienta
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
      <h1>Edycja klienta</h1>
      <label>
        Imię:
        <input type="text" name="firstName" value={clientData.firstName} onChange={handleChange} />
      </label>
      <br />
      <label>
        Nazwisko:
        <input type="text" name="lastName" value={clientData.lastName} onChange={handleChange} />
      </label>
      <br />
      <label>
        Numer telefonu:
        <input
          type="tel"
          name="phoneNumber"
          value={clientData.phoneNumber}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        E-mail:
        <input type="email" name="email" value={clientData.email} onChange={handleChange} />
      </label>
      <br />
      <button onClick={handleUpdateClient}>Zapisz zmiany</button>
    </div>
  );
};

export default RKEditClient;
