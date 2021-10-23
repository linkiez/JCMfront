import { Produto } from './../../models/produto';
import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
  produtos: Produto[] = [];

  first = 0;

  rows = 10;

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.getProdutos();
  }

  getProdutos(): void {
    this.produtoService
      .getProdutos()
      .subscribe((produtos) => (this.produtos = produtos));
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
}
