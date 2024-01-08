import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import RecepcjaHeader from './RecepcjaHeader';

const RKPlatnosci = () => {
  const [clients, setClients] = useState([]);
  const [payments, setPayments] = useState([]);
  const [paymentData, setPaymentData] = useState({
    klientId: '',
    typ: '',
    sposobPlatnosci: '',
    kwota: '',
    data: '',
    zaplacona: false,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    const fetchClients = async () => {
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
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchPayments = async () => {
      try {
        const response = await fetch(
          'https://carmategarage-58a29-default-rtdb.europe-west1.firebasedatabase.app/payments.json'
        );

        if (!response.ok) {
          throw new Error('Failed to fetch payments');
        }

        const data = await response.json();

        if (data) {
          const paymentsArray = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          setPayments(paymentsArray);
        }
      } catch (error) {
        console.error('Error fetching payments:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
    fetchPayments();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPaymentData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleAddPayment = async () => {
    try {
      const response = await fetch(
        'https://carmategarage-58a29-default-rtdb.europe-west1.firebasedatabase.app/payments.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(paymentData),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to add payment');
      }

      setPaymentData({
        klientId: '',
        typ: '',
        sposobPlatnosci: '',
        kwota: '',
        data: '',
        zaplacona: false,
      });

      console.log('Payment added successfully');
    } catch (error) {
      console.error('Error adding payment:', error);
      setError(error.message);
    }
  };

  const handleDeletePayment = async (paymentId) => {
    try {
      const response = await fetch(
        `https://carmategarage-58a29-default-rtdb.europe-west1.firebasedatabase.app/payments/${paymentId}.json`,
        {
          method: 'DELETE',
        }
      );

      if (!response.ok) {
        throw new Error('Failed to delete payment');
      }

      console.log('Payment deleted successfully');
    } catch (error) {
      console.error('Error deleting payment:', error);
      setError(error.message);
    }
  };
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleEditPayment = async (paymentId) => {
    try {
      // Tu dodaj kod do edycji płatności
      console.log('Edit payment with ID:', paymentId);
    } catch (error) {
      console.error('Error editing payment:', error);
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
        <RecepcjaHeader />
      <h1>Płatności klienta</h1>
      <div>
        <h2>Nowa płatność</h2>
        
        <Form>
          <Form.Group controlId="klientSelect">
            <Form.Label>Klient:</Form.Label>
            <Form.Control as="select" name="klientId" value={paymentData.klientId} onChange={handleChange}>
              <option value="">Wybierz klienta</option>
              {clients.map((client) => (
                <option key={client.id} value={client.id}>
                  {client.firstName} {client.lastName}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="typSelect">
            <Form.Label>Typ płatności:</Form.Label>
            <Form.Control as="select" name="typ" value={paymentData.typ} onChange={handleChange}>
              <option value="">Wybierz typ</option>
              <option value="Paragon">Paragon</option>
              <option value="Faktura">Faktura</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="sposobPlatnosciSelect">
            <Form.Label>Sposób płatności:</Form.Label>
            <Form.Control as="select" name="sposobPlatnosci" value={paymentData.sposobPlatnosci} onChange={handleChange}>
              <option value="">Wybierz sposób płatności</option>
              <option value="Gotówka">Gotówka</option>
              <option value="Terminal">Terminal</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="kwotaInput">
            <Form.Label>Kwota:</Form.Label>
            <Form.Control type="number" name="kwota" value={paymentData.kwota} onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="dataInput">
            <Form.Label>Data:</Form.Label>
            <Form.Control type="date" name="data" value={paymentData.data} onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="zaplaconaCheckbox">
            <Form.Check
              type="checkbox"
              label="Zapłacona"
              name="zaplacona"
              checked={paymentData.zaplacona}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" onClick={handleAddPayment}>
            Dodaj płatność
          </Button>
        </Form>
      </div>
      <div>
        <h2>Historia płatności</h2>
        <Form>
          <Form.Group controlId="searchInput">
            <Form.Control
              type="text"
              placeholder="Wyszukaj po imieniu"
              value={searchTerm}
              onChange={handleSearch}
            />
          </Form.Group>
        </Form>
        <Table striped  hover className="Table">
          <thead>
            <tr>
              <th>#</th>
              <th>Klient</th>
              <th>Typ płatności</th>
              <th>Sposób płatności</th>
              <th>Kwota</th>
              <th>Data</th>
              <th>Zapłacona</th>
              <th>Akcje</th>
            </tr>
          </thead>
          <tbody>
  {payments.map((payment, index) => {
    const client = clients.find((client) => client.id === payment.klientId);

    return (
      <tr key={payment.id}>
        <td>{index + 1}</td>
        <td>{client ? `${client.firstName} ${client.lastName}` : 'Brak danych'}</td>
        <td>{payment.typ}</td>
        <td>{payment.sposobPlatnosci}</td>
        <td>{payment.kwota}</td>
        <td>{payment.data}</td>
        <td>{payment.zaplacona ? 'Tak' : 'Nie'}</td>
        <td>
          <Button variant="danger" onClick={() => handleDeletePayment(payment.id)}>
            Usuń
          </Button>
          <Button variant="warning" onClick={() => handleEditPayment(payment.id)}>
            Edytuj
          </Button>
        </td>
      </tr>
    );
  })}
</tbody>
        </Table>
      </div>
    </div>
  );
};

export default RKPlatnosci;
