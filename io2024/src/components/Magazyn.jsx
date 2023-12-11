import '../css/Magazyn.css'
import Button from 'react-bootstrap/esm/Button';
import logo from '../assets/cmg-logo.png';
import {Link} from 'react-router-dom';
import MagazynHeader from './magazyn/MagazynHeader';

function Magazyn() {
 return (
    <body>
    <MagazynHeader></MagazynHeader>
    <div class="btn-container">
        <Button className="btnm" href="rejestrzlecenmagazyn">Rejestr Zleceń</Button>
        <Button className="btnm" href="rejestrzlecenmagazyn">Kosztorys</Button>
        <Button className="btnm" href="magazynzamowienia">Zamówienia</Button>
        <Button className="btnm" href="rejestrmagazynowy">Rejestr magazynowy</Button>
    </div>
</body>
 );
}

export default Magazyn;