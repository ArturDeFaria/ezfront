import { useState } from "react"
import { Usuario } from '../model/Usuario';
import UsuarioRepositorio from "../model/UsuarioRepositorio";
import { useLocation, useNavigate } from "react-router-dom";

function FormUsuario() {
    const location = useLocation()
    const navegation = useNavigate();
    const params = new URLSearchParams(location.search)

    const id = Number(params.get("id"));
    let [nome, setNome] = useState(params.get("nome"));
    let [cpf, setCpf] = useState(params.get("cpf"));
    let [email, setEmail] = useState(params.get("email"));
    let [senha, setSenha] = useState(params.get("senha"));
    let [cadastrador, setCadastrador] = useState(params.get("cadastrador"));

    const repo = new UsuarioRepositorio();
    const updateUsuario = (evt: SubmitEvent) => {
        evt.preventDefault();
        //@ts-ignore
        const p = new Usuario(id, nome, cpf, email, cadastrador, senha);
        repo.alterar(p).then(_ => {
            navegation('/listarUsuarios', { replace: true });
        });
    }
    return (
        //@ts-ignore
        <form className="form bg-primary bg-opacity-75 fs-5 p-4" onSubmit={updateUsuario}>

            {/* Hidden ID field (not required or labeled) */}
            <label className="form-label" hidden={true}>Id</label>
            <input className="form-control fs-5" hidden={true} type="number" value={id}
                // @ts-ignore (if necessary)
                onChange={(e) => setId(e.target.value)} />

            <label className="form-label">Nome</label>
            <input className="form-control fs-5" defaultValue={`${nome}`}
                onChange={(e) => setNome(e.target.value)}
                required aria-label="Nome do usuário" />  <label className="form-label">Cpf</label>
            <input className="form-control fs-5" defaultValue={`${cpf}`}
                onChange={(e) => setCpf(e.target.value)}
                required aria-label="CPF do usuário" />  <label className="form-label">E-Mail</label>
            <input className="form-control fs-5" type="email" defaultValue={`${email}`}
                onChange={(e) => setEmail(e.target.value)}
                required aria-label="E-mail do usuário" />  <label className="form-label">Senha</label>
            <input className="form-control fs-5" type="password"
                onChange={(e) => setSenha(e.target.value)}
                required aria-label="Senha do usuário (opcional)" />  <label>Cadastrador</label>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="cadastradorSim"
                    name="cadastrador"
                    value={1}
                    checked={cadastrador === '1'}
                    onChange={(e) => setCadastrador(e.target.checked ? '1' : '0')}
                />
                <label className="form-check-label" htmlFor="cadastradorSim">
                    Sim
                </label>
            </div>

            <button className="btn btn-warning fs-5 mt-4 " type="submit">Salvar Alterações</button>
        </form>
    )
}

export function UsuarioAlterarDados() {
    return (
        <main>
            <h1 >Editar Usuario</h1>
            <FormUsuario />
        </main>
    )
}