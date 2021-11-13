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

    const task = tarefa;
    props.onCadastroTarefa(task);
    setTarefa('');
  };

  return (
    <Container className="">
      <Form onSubmit={submitHandler}>
        <Row>
          <Col>
            <Form.Control
              onChange={tarefaChangeHandler}
              value={tarefa}
              placeholder="Digite aqui sua tarefa"
            />
          </Col>
          <Col>
            <Button type="submit">Cadastrar</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
export default CadastroTarefa;
