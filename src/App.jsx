import { Routes, Route } from "react-router-dom";
import { Home } from "./Componentes/Home";
import { Contato } from "./Componentes/Contato";
import { Footer } from "./Componentes/Footer";
import { Header } from "./Componentes/Header";
import { Missao } from "./Componentes/Missao";
import { Produto } from "./Componentes/Produto";
import "./Styles.global.css";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home nomePagina="Pagina Inicial" />} />
        <Route path="/missao" element={<Missao nomePagina="Missão Chakra UI" />} />
        <Route
          path="/produto"
          element={<Produto nomePagina="Nossos Produtos" />}
        />
        <Route path="/contato" element={<Contato nomePagina="Contato" />} />
      </Routes>

      {<Footer nomeFooter="Atividade Prática" />}
    </div>
  );
}

export default App;
