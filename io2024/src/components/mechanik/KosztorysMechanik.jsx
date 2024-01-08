import Button from 'react-bootstrap/Button';
import '../../css/mechanik/KosztorysMechanik.css'
import MechanikHeader from './MechanikHeader';

function KosztorysMechanik() {
  return (
    <div>
      <MechanikHeader></MechanikHeader>
    <div className="KosztorysMechanik">
<input type="text" id="nazwa-input" placeholder="Wprowadź nazwę części" />
<input type="text" className='textarea' id="nazwa-input" placeholder="Wprowadź ilość roboczogodzin" />
<button className='btnm' id="przeslij-button">Prześlij</button>{' '}
    </div>
    </div>
  );
}

export default KosztorysMechanik