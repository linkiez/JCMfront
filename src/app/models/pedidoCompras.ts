import { Fornecedor } from './fornecedor';
import { Produto } from './produto';

export interface PedidoCompras {
  id?: number;
  pedido?: string;
  data_emissao?: Date;
  cond_pagamento?: string;
  frete?: number;
  transporte?: string;
  createdAt?: Date;
  updatedAt?: Date;
  FornecedoreId?: number;
  Fornecedore?: Fornecedor;
  PedidoComprasItens?: PedidoComprasItens[];
}

export interface PedidoComprasItens {
  id?: number;
  dimensao?: string;
  quantidade?: number;
  peso?: number;
  preco?: number;
  ipi?: number;
  prazo?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  PedidoCompraId?: number;
  ProdutoId?: number;
  Produto?: Produto;
}
