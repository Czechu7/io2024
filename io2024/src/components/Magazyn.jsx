import '../css/Magazyn.css'
import Button from 'react-bootstrap/esm/Button';
import logo from '../assets/cmg-logo.png';
import {Link} from 'react-router-dom';
import MagazynHeader from './magazyn/MagazynHeader';

function Magazyn() {
 return (
    <div>
    <MagazynHeader></MagazynHeader>
    <div className="btn-container">
        <Button className="btnm" href="rejestrzlecenmagazyn">Rejestr Zleceń</Button>
        <Button className="btnm" href="magazynkosztorys">Kosztorys</Button>
        <Button className="btnm" href="magazynzamowienia">Zamówienia</Button>
        <Button className="btnm" href="rejestrmagazynowy">Rejestr magazynowy</Button>
    </div>
</div>
 );
}

export default Magazyn;