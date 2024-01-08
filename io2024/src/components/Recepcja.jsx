import '../css/Recepcja.css'
import Button from 'react-bootstrap/Button';
import RecepcjaHeader from './recepcja/RecepcjaHeader';

function Recepcja() {
  return (
    <div>
      <RecepcjaHeader/>
    <div className="MainPage">
    <h1>CarMate Garage</h1>
    <p>Recepcja</p>
    <div className="ButtonContainer">
      <Button className="Button" type="submit" href="rejestrklientowrecepcja">
        Rejestr Klientów
      </Button>

      <Button className="Button" type="submit" href="rejestrplatnosci">
        Rejestr Płatności
      </Button>

      <Button className="Button" type="submit" href="rejestrzlecenrecepcja">
        Rejestr Zleceń
      </Button>

    </div>
  </div>
  </div>
  );
}

export default Recepcja
