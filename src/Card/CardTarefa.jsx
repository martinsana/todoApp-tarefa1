import { Card, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CardTarefa.css';

function CardTarefa(props) {
  return (
    <Card className="card-tarefa">
      <Card.Body className="d-flex flex-row">
        <div>
          <Card.Title>{props.tarefa}</Card.Title>
        </div>
        <div className="d-flex flex-row-reverse button">
          <Button variant="primary">Feito</Button>
        </div>
      </Card.Body>
    </Card>
  );
}
export default CardTarefa;
