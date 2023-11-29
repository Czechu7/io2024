import '../../css/magazyn/RejestrZlecenMagazyn.css';
import Button from 'react-bootstrap/Button';
import MagazynHeader from './MagazynHeader';
import Table from "react-bootstrap/esm/Table";

function RejestrZlecenMagazyn() {
  return (
    <div className='Table'>
      <MagazynHeader></MagazynHeader>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Imię klienta</th>
            <th>Nazwisko klienta</th>
            <th>Marka samochodu</th>
            <th>Rok produkcji</th>
            <th>Usterka</th>
            <th>Numer telefonu</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Jan</td>
            <td>Kowalski</td>
            <td>Toyota</td>
            <td>2018</td>
            <td>Silnik nie odpala</td>
            <td>555123456</td>
            <td>jan.kowalski@example.com</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Alicja</td>
            <td>Nowak</td>
            <td>Ford</td>
            <td>2015</td>
            <td>Problemy z hamulcami</td>
            <td>666789012</td>
            <td>alicja.nowak@example.com</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Marek</td>
            <td>Wiśniewski</td>
            <td>Chevrolet</td>
            <td>2020</td>
            <td>Awaria skrzyni biegów</td>
            <td>777345678</td>
            <td>marek.wisniewski@example.com</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </Table>

      <div>
        <Button type="submit" href="/magazyn">
          Magazyn
        </Button>
      </div>
      <div>
        <Button type="submit" href="/">
          Strona Główna
        </Button>
      </div>
    </div>
    );
}

export default RejestrZlecenMagazyn
