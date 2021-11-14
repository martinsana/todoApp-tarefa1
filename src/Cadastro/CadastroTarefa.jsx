import { Button, Container, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './Cadastro.css';
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
    <Container className="container-cadastro">
      <Form className="d-flex flex-row" onSubmit={submitHandler}>
        <Form.Control
          onChange={tarefaChangeHandler}
          value={tarefa}
          placeholder="Digite aqui sua tarefa"
          className="form-cadastro"
        />
        <Button type="submit">Cadastrar</Button>
      </Form>
    </Container>
  );
}
export default CadastroTarefa;
