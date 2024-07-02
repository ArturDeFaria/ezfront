import axios from "axios";
import { Usuario } from "../model/Usuario";

export class UsuarioService {

    private client = axios.create({
        baseURL: "https://ezback-production.up.railway.app/"
    });

    obterTodos = async (): Promise<Usuario[]> => {
        try {
          const resp = await this.client.get("/Usuarios");
          // Access the actual array of users within the "response" property
          const usuarios: Usuario[] = resp.data.response.usuarios; 
          return usuarios.map((user: Usuario) => user); 
        } catch (error) {
          // Handle errors here, like logging or throwing a custom error
          console.error("Error fetching users:", error);
          throw new Error("Failed to obtain users"); // Or throw a more specific error
        }
      };

    obter = async (id: Number): Promise<Usuario> => {
        let resp = null
        resp = await this.client.get("/Usuarios/" + id);
        return resp.data;
    }

    incluir = async (p: Usuario) => {
        try {
          const response = await this.client.post("/Usuarios", p, { headers: { 'Content-Type': 'application/json' } });
          // Access the actual data within the "response" property
          const data = response.data.response; // Assuming "response" contains the actual data
          console.log("Usuario incluido:", data);
        } catch (error) {
          console.error("Error incluindo usuario:", error);
          // Handle errors appropriately (e.g., display an error message to the user)
        }
      };

    alterar = async (p: Usuario) => {
        await this.client.put(`/Usuarios/${p.id}`, p);
    }

    excluir = async (id: number) => {
        await this.client.delete(`Usuarios/${id}`);
    }
}