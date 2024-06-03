import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Componentes/Home";
import { Contato } from "./Componentes/Contato";
import { Footer } from "./Componentes/Footer";
import { Header } from "./Componentes/Header";
import { Missao } from "./Componentes/Missao";
import { Produto } from "./Componentes/Produto";
import customTheme from "./theme";
import "./Styles.global.css";

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home nomePagina=" Início da jornada de aprendizado do Chakra UI" />} />
          <Route path="/missao" element={<Missao nomePagina="Missão Chakra UI" />} />
          <Route path="/produto" element={<Produto nomePagina="Nossos Produtos" />} />
          <Route path="/contato" element={<Contato nomePagina="Contato" />} />
        </Routes>

        <Footer/>
      </div>
    </ChakraProvider>
  );
}

export default App;
