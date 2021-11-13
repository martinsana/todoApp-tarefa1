import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardTarefa from './CardTarefa';
function ListagemTarefa({ tarefas }) {
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          {tarefas.map((t, index) => (
            <CardTarefa key={index} tarefa={t} handleRemoveItem={index} />
          ))}
        </Row>
      </Container>
    </>
  );
}

export default ListagemTarefa;
