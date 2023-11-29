import '../../css/recepcja/RejestrKlientowRecepcja.css'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function RejestrKlientowRecepcja() {
  return (
    <div className="Recepcja">
    <h1>Rejestr klientów</h1>
    <Table striped bordered hover className='Table'>
    <thead>
        <tr>
            <th>#</th>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>Numer telefonu</th>
            <th>E-mail</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Andrzej</td>
            <td>Jankowski</td>
            <td>528990527</td>
            <td>andrzejek77@onet.pl</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Maciej</td>
            <td>Kowalik</td>
            <td>733636527</td>
            <td>maciekkowalik@gmail.com</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Patrycja</td>
            <td>Smutowska</td>
            <td>723467767</td>
            <td>patrycja02@interia.pl</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Kamil</td>
            <td>Drożdzek</td>
            <td>822421767</td>
            <td>kamilek01@o2.pl</td>
        </tr>
    </tbody>
</Table>

<div>
    <Button type="submit" href="/recepcja">
        Powrót do recepcji
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

export default RejestrKlientowRecepcja
