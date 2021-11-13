import { Card, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function CardTarefa(props) {
  return (
    <Card>
      <Card.Body>
        <Row className="justify-content-md-center">
          <Col>
            <Card.Title>{props.tarefa.descricao}</Card.Title>
          </Col>
          <Col>
            <Button variant="primary">Done</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
export default CardTarefa;
