import '../css/MainPage.css'
import Button from 'react-bootstrap/Button';

function MainPage() {
  return (
    <div className="MainPage">
    <h1>CarMate Garage</h1>
    <p>Panel pracowniczy</p>
    <div className="ButtonContainer">
      <Button className="Button" type="submit" href="kierownik">
        Kierownik
      </Button>

      <Button className="Button" type="submit" href="mechanik">
        Mechanik
      </Button>

      <Button className="Button" type="submit" href="recepcja">
        Recepcja
      </Button>

      <Button className="Button" type="submit" href="magazyn">
        Magazyn
      </Button>
    </div>
  </div>
  );
}

export default MainPage
