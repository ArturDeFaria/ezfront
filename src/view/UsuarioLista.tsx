import { useEffect, useState } from 'react';
import { Usuario } from '../model/Usuario';
import UsuarioRepositorio from '../model/UsuarioRepositorio';
import { Link, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { UsuarioService } from '../service/UsuarioService';

interface linhaProps{
    Usuario: Usuario;
}
  
function LinhaUsuario(props: linhaProps){
    const Usuario = props.Usuario;
    const UsuarioString:any = queryString.stringify(Usuario);
    
    const serv = new UsuarioService();
    const navegate = useNavigate();
    
    const excluir = (id: number) =>{
      serv.excluir(id).then(_=>{
        navegate(0);
      });

    }  

    return(
      <tr className="fs-5">
        <td>{Usuario.id}</td>
        <td>{Usuario.nome}</td>
        <td>{Usuario.cpf}</td>
        <td>{Usuario.email}</td>
        <td>{Usuario.cadastrador}</td>
        <td>
          <Link className="btn btn-warning fs-5 fs- w-100" to={`/alterarUsuario/?${UsuarioString}`}>
            Atualizar
          </Link>
        </td>
        <td>
          
          <button onClick={(evt)=>{
            //@ts-ignore
            excluir(Usuario.id);}}
            className="btn btn-danger fs-5 fs- w-100">
               Excluir
            </button>
        </td>
      </tr>
    )
  }
  
function TableUsuarios() {
    const [dados,setDados] = useState(new Array<Usuario>())
    const repo = new UsuarioRepositorio();
    let mudou: boolean = false;
    useEffect(()=>{
        repo.obterTodos().then((x)=>setDados(x));
    },[mudou])
    
    return (
      <table className="table table-striped">
        <thead className="table-dark bg-dark fs-4">
          <tr>
          <th>Codigo</th><th>Nome</th><th>CPF</th><th>E-mail</th><th>Cadastrador</th><th></th><th></th>
          </tr>
        </thead>
        <tbody className='table-primary'>
        {dados.map(p => <LinhaUsuario key={p.id} Usuario={p}/>)}
        </tbody>
      </table>
    );
}

export function UsuarioLista(){
    return(
        <main>
            <h1>Listagem de Usuarios</h1>
            <div className='table-responsive'>
              <TableUsuarios/>
            </div>
        </main>
    )
}