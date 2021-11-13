import CadastroTarefa from './CadastroTarefa';
import Header from './Header/Header';
import ListagemTarefa from './ListagemTarefa';
import Footer from './Footer/Footer';
import { useState } from 'react';
function App() {
  const [tarefas, setTarefas] = useState('');
  const cadastrarTarefa = novaTarefa => {
    setTarefas(prevState => {
      return [novaTarefa, ...prevState];
    });
    tarefas.push(novaTarefa);
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
