import './App.css';
import List from './components/List';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap'

function App() {
  return (
    <div>
      <Container>
        <List/>
      </Container>
    </div>
  );
}

export default App;
