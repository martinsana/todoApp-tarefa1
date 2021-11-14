import CadastroTarefa from './Cadastro/CadastroTarefa';
import Header from './Header/Header';
import ListagemTarefa from './Listagem/ListagemTarefa';
import Footer from './Footer/Footer';
import { useState } from 'react';
import './App.css';
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
