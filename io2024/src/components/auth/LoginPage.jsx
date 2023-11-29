// LoginPage.js
import '../../css/auth/LoginPage.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LoginPage() {
    return (
      <Form className="login-form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nazwa użytkownika</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Hasło</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
  
        <Button variant="primary" type="submit" href='home' className="login-button">
          Zaloguj
        </Button>
      </Form>
    );
  }

export default LoginPage;
