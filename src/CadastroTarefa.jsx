import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
function CadastroTarefa(props) {
  const [tarefa, setTarefa] = useState('');

  const tarefaChangeHandler = event => {
    setTarefa(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();

    props.onCadastroTarefa(tarefa);
    setTarefa('');
    console.log(tarefa);
  };

  return (
    <Container className="">
      <Form onSubmit={submitHandler}>
        <Row>
          <Col>
            <Form.Control onChange={tarefaChangeHandler} />
          </Col>
          <Col>
            <Button type="submit" variant="primary">
              Cadastrar
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
export default CadastroTarefa;
