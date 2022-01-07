import { Component, OnInit } from '@angular/core';
import { PedidoCompras } from 'src/app/models/pedidoCompras';
import { MessageService } from 'primeng/api';
import { PedidoComprasService } from '../../service/pedidoCompras.service';

@Component({
  selector: 'app-pedidosCompras',
  templateUrl: './pedidosCompras.component.html',
  styleUrls: ['./pedidosCompras.component.scss'],
  providers: [MessageService]
})
export class PedidosComprasComponent implements OnInit {
  first = 0;
  rows = 10;

  pedidosCompras: PedidoCompras[] = [];

  constructor(
    private messageService: MessageService,
    private pedidosComprasService: PedidoComprasService
  ) {}

  ngOnInit(): void {
    this.getPedidosCompras();
  }

  getPedidosCompras() {
    this.pedidosComprasService.getPedidosCompras().subscribe(
      (pedidosCompras) => (this.pedidosCompras = pedidosCompras),
      (error) => this.addErrorMessage(error)
    );
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
    return this.pedidosCompras
      ? this.first === this.pedidosCompras.length - this.rows
      : true;
  }

  isFirstPage(): boolean {
    return this.pedidosCompras ? this.first === 0 : true;
  }

  addErrorMessage(error: any) {
    this.messageService.add({
      severity: 'error',
      summary: 'Erro: ',
      detail: error.message,
    });
  }
}
