export interface Fornecedor{
  id?: number;
  nome?: string;
  contato?: string;
  telefone?: number;
  email?: string;
  endereco?: string;
  municipio?: string;
  estado?: string;
  cep?: number;
  ie_rg?: number;
  cnpj_cpf?: number;
  descricao?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
