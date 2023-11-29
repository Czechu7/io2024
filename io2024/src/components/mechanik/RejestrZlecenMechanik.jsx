import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/esm/Table';
import '../../css/mechanik/RejestrZlecenMechanik.css'


function RejestrZlecenMechanik() {
  return (
    <div className="Table">
      <h1>RejestrZlecenMechanik</h1>
      <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Data</th>
        <th>Marka</th>
        <th>Usługa</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>29.11.2023</td>
        <td>BMW</td>
        <td>Naprawa przedniego zderzaka</td>
      </tr>
      <tr>
        <td>2</td>
        <td>30.11.2023</td>
        <td>Mercedes-Benz</td>
        <td>Naprawa uszczelki pod głowicą</td>
      </tr>
      <tr>
        <td>3</td>
        <td>31.11.2023</td>
        <td>Audi</td>
        <td>Przegląd</td>
      </tr>
    </tbody>
  </Table>
      <Button type="submit"  href="/" >Powrót</Button>{' '}
    </div>
  );
}

export default RejestrZlecenMechanik