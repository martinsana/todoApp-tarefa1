import { Card, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
function CardTarefa(props) {
  const handleRemoveItem = index => {};

  return (
    <Card>
      <Card.Body>
        <Row className="justify-content-md-center">
          <Col>
            <Card.Title>{props.tarefa}</Card.Title>
          </Col>
          <Col>
            <Button onClick={handleRemoveItem} variant="primary">
              Feito
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
export default CardTarefa;
