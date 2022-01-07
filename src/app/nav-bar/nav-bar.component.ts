import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() {}

  ngOnInit() {
    this.items = [
      {
        label: 'Cadastro',
        items: [
          { label: 'Produtos', url: '/produtos' },
          { label: 'Fonecedores', url: '/fornecedores' },
        ],
      },
      { label: 'Vendas' },
      { label: 'Compras', items: [{ label: 'Pedido de Compras', url: '/pedidoscompras' }] },
    ];
  }
}
