import '../css/Mechanik.css'
import Button from 'react-bootstrap/Button';

function Mechanik() {
  return (
  <div className="MainPage">
  <div className="ButtonContainer">
        <Button className="Button" type="submit" href="rejestrzlecen">Rejestr zleceń
    </Button>

    <Button className="Button" type="submit" href="kosztorysmechanik">
    Kosztorys
    </Button>


    </div>
  </div>

  );
}

export default Mechanik
