import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import MagazynAddPart from './MagazynAddPart';
import MagazynHeader from './MagazynHeader';
import '../../css/magazyn/RejestrMagazynowy.css';

function RejestrMagazynowy() {
  const [parts, setParts] = useState([]);
  const [filteredParts, setFilteredParts] = useState([]);
  const [itemOrder, setItemOrder] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://carmategarage-58a29-default-rtdb.europe-west1.firebasedatabase.app/czesci.json'
      );

      if (!response.ok) {
        throw new Error('Failed to fetch parts');
      }

      const data = await response.json();

      if (data) {
        const partsArray = Object.keys(data).map((key, index) => ({
          id: key,
          order: index + 1,
          ...data[key],
        }));

        setParts(partsArray);
        setFilteredParts(partsArray);

        // Aktualizuj stan z kolejnością
        const orderData = {};
        partsArray.forEach((part) => {
          orderData[part.id] = part.order;
        });
        setItemOrder(orderData);
      }
    } catch (error) {
      console.error('Error fetching parts:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePartAdded = () => {
    fetchData();
  };

  const handleDeletePart = async (partId) => {
    try {
      const partToDelete = parts.find((part) => part.id === partId);

      if (!partToDelete) {
        throw new Error('Part not found');
      }

      const newQuantity = partToDelete.quantity - 1;

      const method = newQuantity === 0 ? 'DELETE' : 'PATCH';

      const response = await fetch(
        `https://carmategarage-58a29-default-rtdb.europe-west1.firebasedatabase.app/czesci/${partId}.json`,
        {
          method,
          headers: {
            'Content-Type': 'application/json',
          },
          body: method === 'DELETE' ? null : JSON.stringify({ quantity: newQuantity }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to delete part');
      }

      // Poczekaj na zakończenie usuwania, zanim zaktualizujesz stan
      await response.json();

      // Odśwież dane
      fetchData();
    } catch (error) {
      console.error('Error deleting part:', error);
    }
  };

  useEffect(() => {
    // Sprawdź czy ilość wynosi 1, jeśli tak, odśwież tabelę
    const partWithQuantityOne = parts.find((part) => part.quantity === 1);
    if (partWithQuantityOne) {
      fetchData();
    }
  }, [parts]);

  useEffect(() => {
    // Filtruj części po nazwie lub ilości
    const filtered = parts.filter((part) =>
      part.partName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      part.quantity.toString().includes(searchTerm)
    );
    setFilteredParts(filtered);
  }, [searchTerm, parts]);

  return (
    <div className="Magazyn">
      <MagazynHeader></MagazynHeader>
      <div>
        <label>
          Szukaj części (nazwa lub ilość):<br></br>
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
            <th>Akcje</th>
          </tr>
        </thead>
        <tbody>
          {filteredParts.map((part) => (
            <tr key={part.id}>
              <td>{itemOrder[part.id]}</td>
              <td>{part.partName}</td>
              <td>{part.price}</td>
              <td>{part.quantity}</td>
              <td>
                <Link to={`/editpart/${part.id}`}>
                  <Button variant="warning">Edytuj</Button>
                </Link>
                <Button variant="danger" onClick={() => handleDeletePart(part.id)}>
                  Usuń
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <MagazynAddPart onPartAdded={handlePartAdded} />
      <div>
        <Button type="button" onClick={() => navigate('/magazyn')}>
          Strona Główna
        </Button>
      </div>
    </div>
  );
}

export default RejestrMagazynowy;
