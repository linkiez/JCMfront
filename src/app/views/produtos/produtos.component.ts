import { Produto } from './../../models/produto';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/service/produto.service';
import { MessageService } from 'primeng/api';




@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
  providers: [MessageService]
})
export class ProdutosComponent implements OnInit {
  produtos: Produto[] = [];

  first = 0;

  rows = 10;

  constructor(private produtoService: ProdutoService, private messageService: MessageService, ) {}

  ngOnInit(): void {
    this.getProdutos();
  }

  getProdutos(): void {
    this.produtoService
      .getProdutos()
      .subscribe((produtos) => (this.produtos = produtos), (error) => this.addErrorMessage(error));
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.produtos
      ? this.first === this.produtos.length - this.rows
      : true;
  }

  isFirstPage(): boolean {
    return this.produtos ? this.first === 0 : true;
  }

  addErrorMessage(error: any) {
    this.messageService.add({severity:'error', summary: 'Erro: ', detail: error.message});
  }
}
