import '../../css/Magazyn.css'
import Button from 'react-bootstrap/esm/Button';
import logo from '../../assets/cmg-logo.png';
import {Link, useNavigate} from 'react-router-dom';

function MagazynHeader() {
    const navigate = useNavigate();

 return (
    <div className="header"> 
     <Button className="back-button" onClick={() => navigate(-1)}>Powrót</Button>
     <h1>Magazyn</h1>
     <div> 
     <Link to="/home">
     <img className="logo" src={logo} alt="Logo"/> 
     </Link>
     </div> 
     </div>
 );
}

export default MagazynHeader