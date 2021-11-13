import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardTarefa from './CardTarefa';
function ListagemTarefa() {
  const tarefas = [
    { descricao: 'Teste1' },
    { descricao: 'Teste2' },
    { descricao: 'Teste3' },
  ];
  return (
    <>
      <Container>
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
