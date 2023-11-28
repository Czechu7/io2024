import '../css/MainPage.css'
import Button from 'react-bootstrap/Button';

function MainPage() {
  return (
    <div className="MainPage">
      <h1>Strona główna</h1>
      <Button type="submit"  href="kierownik" >kierownik</Button>{' '}
      
      <Button type="submit"  href="mechanik" >mechanik</Button>{' '}
      
      <Button type="submit"  href="recepcja" >recepcja</Button>{' '}
      
      <Button type="submit"  href="magazyn" >magazyn</Button>{' '}
    </div>
  );
}

export default MainPage
