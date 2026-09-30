export interface LoginData {
  message: string;
  authorization: string;
}

export interface PostData {
  email: string;
  password: string;
}

export interface CadastroUsuario extends PostData {
  nome: string;
  administrador: string;
}

export interface CadastroData {
  message: string;
  id: string;
}

