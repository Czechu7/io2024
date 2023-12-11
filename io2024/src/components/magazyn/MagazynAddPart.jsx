import React, { useState } from 'react';

const MagazynAddPart = ({ onPartAdded }) => {
  const [newPart, setNewPart] = useState({
    partName: '',
    price: '',
    quantity: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPart((prevPart) => ({
      ...prevPart,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Dodaj nową część do Realtime Database
      const response = await fetch(
        'https://carmategarage-58a29-default-rtdb.europe-west1.firebasedatabase.app/czesci.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newPart),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to add part');
      }

      // Zresetuj formularz po dodaniu części
      setNewPart({
        partName: '',
        price: '',
        quantity: '',
      });

      // Aktualizuj dane w komponencie nadrzędnym
      if (onPartAdded) {
        onPartAdded();
      }
    } catch (error) {
      console.error('Error adding part:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nazwa części:
        <input
          type="text"
          name="partName"
          value={newPart.partName}
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
          value={newPart.price}
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
          value={newPart.quantity}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <button type="submit">Dodaj część</button>
    </form>
  );
};

export default MagazynAddPart;
