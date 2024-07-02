export class Usuario{
    id: number | null;
    nome:   string;
    cpf: string;
    email: string;
    cadastrador: boolean;
    senha:string;

    constructor(id:number =0,
        nome:string="",
        cpf:string="",
        email:string="",
        cadastrador:boolean=false,
        senha:string="",
    ){

            this.id = id;
            this.nome   = nome;
            this.cpf  = cpf;
            this.email  = email;
            this.cadastrador = cadastrador;
            this.senha = senha;
    }
}