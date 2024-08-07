import { useState } from "react"
import { Usuario } from "../model/Usuario";
import UsuarioRepositorio from "../model/UsuarioRepositorio";
import { useNavigate } from "react-router-dom";

function FormUsuario() {
    const [id] = useState(undefined);
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [cadastrador, setCadastrador] = useState(false);

    const repo = new UsuarioRepositorio();
    const navegate = useNavigate();

    const addUsuario = (evt: SubmitEvent) => {
        evt.preventDefault();
        const p = new Usuario(id, nome, cpf, email, cadastrador, senha);
        console.log(p);
        repo.adicionar(p).then(_ => {
            navegate('/listarUsuarios', { replace: true });
        })
    }

    return (
        //@ts-ignore
        <form className="form bg-primary bg-opacity-75 fs-5 p-4" onSubmit={addUsuario}>
            <label className="form-label">Nome</label>
            <input className="form-control fs-5" value={nome}
                onChange={(e) => setNome(e.target.value)} required
                aria-label="Nome do usuário" />

            <label className="form-label">Cpf</label>
            <input className="form-control fs-5" value={cpf}
                onChange={(e) => setCpf(e.target.value)} required
                aria-label="CPF do usuário" />

            <label className="form-label">E-Mail</label>
            <input className="form-control fs-5" type="email" value={email}
                onChange={(e) => setEmail(e.target.value)} required
                aria-label="E-mail do usuário" />

            <label className="form-label">Senha</label>
            <input className="form-control fs-5" type="password"
                onChange={(e) => setSenha(e.target.value)} required
                aria-label="Senha do usuário" />

            <label>Cadastrador</label>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="cadastradorSim"
                    name="cadastrador"
                    value={1}
                    checked={cadastrador}
                    onChange={(e) => setCadastrador(e.target.checked)}
                    aria-label="Marcar para definir como cadastrador"
                />
                <label className="form-check-label" htmlFor="cadastradorSim">
                    Sim
                </label>
            </div>

            <button className="btn btn-lg btn-primary bg-black mt-4" type="submit">Adicionar</button>
        </form>
    )
}

export function UsuarioDados() {
    return (
        <main>
            <h1>Nova Usuario</h1>
            <FormUsuario />
        </main>
    )
}