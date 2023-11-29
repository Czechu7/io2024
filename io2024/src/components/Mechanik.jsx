import '../css/Mechanik.css'
import Button from 'react-bootstrap/Button';

function Mechanik() {
  return (
    <div>
      <h1>Mechanik</h1>
    <div><Button type="submit"  href="/rejestrzlecenmechanik" >RejestrZlecenMechanik</Button></div>
    <div><Button type="submit"  href="/kosztorysmechanik" >KosztorysMechanik</Button></div>
    </div>
  );
}

export default Mechanik
