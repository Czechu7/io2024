import Button from 'react-bootstrap/Button';
import '../../css/mechanik/KosztorysMechanik.css'


function KosztorysMechanik() {
  return (
    <div className="KosztorysMechanik">
      <h1>KosztorysMechanik</h1>
<input type="text" id="nazwa-input" placeholder="Wprowadź nazwę części" />
<input type="text" className='textarea' id="nazwa-input" placeholder="Wprowadź ilość roboczogodzin" />
<button className='btnm' id="przeslij-button">Prześlij</button>
      <Button className='btnm' type="submit"  href="/mechanik" >Powrót</Button>{' '}
    </div>
  );
}

export default KosztorysMechanik