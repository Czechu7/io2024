import  { useState } from 'react';

const RKAddClient = ({ onClientAdded }) => {
  const [newClient, setNewClient] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewClient((prevClient) => ({
      ...prevClient,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Dodaj nowego klienta do Realtime Database
      const response = await fetch(
        'https://carmategarage-58a29-default-rtdb.europe-west1.firebasedatabase.app/clients.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newClient),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to add client');
      }

      // Zresetuj formularz po dodaniu klienta
      setNewClient({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
      });

      // Aktualizuj dane w komponencie nadrzędnym
      if (onClientAdded) {
        onClientAdded();
      }
    } catch (error) {
      console.error('Error adding client:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Imię:
        <input
          type="text"
          name="firstName"
          value={newClient.firstName}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Nazwisko:
        <input
          type="text"
          name="lastName"
          value={newClient.lastName}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Numer telefonu:
        <input
          type="tel"
          name="phoneNumber"
          value={newClient.phoneNumber}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        E-mail:
        <input
          type="email"
          name="email"
          value={newClient.email}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <button type="submit">Dodaj klienta</button>
    </form>
  );
};

export default RKAddClient;
