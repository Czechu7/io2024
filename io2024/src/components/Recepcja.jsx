import '../css/Recepcja.css'
import Button from 'react-bootstrap/Button';

function Recepcja() {
  return (
    <div className="MainPage">
    <h1>CarMate Garage</h1>
    <p>Recepcja</p>
    <div className="ButtonContainer">
      <Button className="Button" type="submit" href="rejestrklientowrecepcja">
        Rejestr Klientów
      </Button>

      <Button className="Button" type="submit" href="recepcja">
        Rejestr Płatności
      </Button>

      <Button className="Button" type="submit" href="recepcja">
        Rejestr Zleceń
      </Button>

    </div>
  </div>
  );
}

export default Recepcja
