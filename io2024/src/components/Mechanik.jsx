import '../css/Mechanik.css'
import Button from 'react-bootstrap/Button';
import MechanikHeader from './mechanik/MechanikHeader';

function Mechanik() {
  return (
    <div>
      <MechanikHeader></MechanikHeader>
    <div><Button type="submit"  href="/rejestrzlecenmechanik" >Rejestr zleceń</Button></div>
    <div><Button type="submit"  href="/kosztorysmechanik" >Kosztorys</Button></div>
    <div><Button type="submit"  href="/home" >Strona główna</Button></div>

    </div>
  );
}

export default Mechanik
