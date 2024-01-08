import '../css/Mechanik.css'
import Button from 'react-bootstrap/Button';

function Mechanik() {
  return (
    <div>
      <h1>Mechanik</h1>
    <div><Button type="submit"  href="/rejestrzlecen" >Rejestr zleceń</Button></div>
    <div><Button type="submit"  href="/kosztorysmechanik" >Kosztorys</Button></div>
    <div><Button type="submit"  href="/home" >Strona główna</Button></div>

    </div>
  );
}

export default Mechanik
