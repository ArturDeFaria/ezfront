import { UsuarioService } from "../service/UsuarioService";
import { Usuario } from './Usuario';

export default class UsuarioRepositorio{
    private dados: Array<Usuario> =[];
    private serv:  UsuarioService = new UsuarioService();

    obterTodos = async(): Promise<Array<Usuario>> => {
        const resp = await this.serv.obterTodos();
        this.dados = resp.map(
            (u: any)=>
            new Usuario(u.id,u.nome,u.cpf,u.email,u.cadastrador)
        );
        return this.dados; 
    }

    obter = async(id:Number): Promise<Usuario>=> {
        const resp = await this.serv.obter(id);        
        return resp; 
    }

    adicionar =async (u:Usuario) => {
        await this.serv.incluir(u)
    }
    
    alterar =async (u:Usuario) => {
        await this.serv.alterar(u)
    }
}