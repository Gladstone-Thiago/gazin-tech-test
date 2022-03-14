export type formData = {
  name: string;
  email: string;
  cpf: string;
  rg: string;
  cell_phone: string;
  phone: string;
  password: string;
  confirm_password: string;
  status: boolean;
  permissions: string[];
};

export type Information = {
  id: string;
  nome: string;
  email: string;
  cpf: string;
  rg: string;
  telefone: string;
  celular: string;
  senha: string;
  ativo: boolean;
  roles: string[];
};

export type Action = {
  type: 'create' | 'edit' | 'delete';
};

export type usersType = {
  id: string;
  nome: string;
  email: string;
  cpf: string;
  rg: string;
  telefone: string;
  celular: string;
  senha: string;
  ativo: boolean;
  roles: string[];
};

export type getAdminsUsersType = {
  totalRegitros: number;
  usuarios: usersType[];
};
