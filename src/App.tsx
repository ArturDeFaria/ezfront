import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// @ts-ignore 
import { Header } from "./Header";
// @ts-ignore
import { Home } from "./Home";
// @ts-ignore
import { Footer } from "./Footer";


import { UsuarioLista } from './view/UsuarioLista';
import { UsuarioDados } from './view/UsuarioDados';
import { UsuarioAlterarDados } from './view/UsuarioAlterarDados';

/*


import { FornecedorLista } from './view/FornecedorLista';
import { FornecedorDados } from "./view/FornecedorDados";
import { FornecedorAlterarDados } from "./view/FornecedorAlterarDados";

import { CategoriaLista } from './view/CategoriaLista';
import { CategoriaDados } from "./view/CategoriaDados";
import { CategoriaAlterarDados } from "./view/CategoriaAlterarDados";

import { ProdutoLista } from "./view/ProdutoLista";
import { ProdutoDados } from "./view/ProdutoDados";
import { ProdutoAlterarDados } from "./view/ProdutoAlterarDados";
*/




export default function App() {


  return (

    <Router>
      <Header />
      <Routes>
        {/* home */}
        <Route path="/" element={<Home />} />

        {/* usuarios */}
        <Route path="/listarUsuarios" element={<UsuarioLista/>} />
        <Route path="/inserirUsuario" element={<UsuarioDados/>} />
        <Route path="/alterarUsuario" element={<UsuarioAlterarDados/>} />

        


      </Routes>
      <Footer />

    </Router>


  )
}