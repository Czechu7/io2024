import '../css/Mechanik.css'
import Button from 'react-bootstrap/Button';
import MechanikHeader from './mechanik/MechanikHeader';

function Mechanik() {
  return (
    <div>
      <MechanikHeader></MechanikHeader>
  <div className="MainPage">
  <div className="ButtonContainer">
        <Button className="Button" type="submit" href="rejestrzlecen">Rejestr zleceń
    </Button>

    <Button className="Button" type="submit" href="kosztorysmechanik">
    Kosztorys
    </Button>

    </div>
  </div>
</div>
  );
}

export default Mechanik
