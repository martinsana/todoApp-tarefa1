import CadastroTarefa from './CadastroTarefa';
import Header from './Header/Header';
import ListagemTarefa from './ListagemTarefa';
import Footer from './Footer/Footer';
import { useState } from 'react';
function App() {
  const empty = ['Exemplo'];
  const [tarefas, setTarefas] = useState(empty);
  const cadastrarTarefa = novaTarefa => {
    setTarefas([novaTarefa, ...tarefas]);
  };

  return (
    <>
      <Header />
      <CadastroTarefa onCadastroTarefa={cadastrarTarefa} />
      <ListagemTarefa tarefas={tarefas} />
      <Footer />
    </>
  );
}

export default App;
