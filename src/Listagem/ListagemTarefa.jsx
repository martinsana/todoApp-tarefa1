import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardTarefa from '../Card/CardTarefa';
import './ListagemTarefa.css';
function ListagemTarefa({ tarefas }) {
  return (
    <>
      <Container className="listagem">
        <Row className="justify-content-md-center">
          {tarefas.map((t, index) => (
            <CardTarefa key={index} tarefa={t} />
          ))}
        </Row>
      </Container>
    </>
  );
}

export default ListagemTarefa;
