import { Fornecedor } from 'src/app/models/fornecedor';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PedidoCompras } from 'src/app/models/pedidoCompras';
import { PedidoComprasService } from 'src/app/service/pedidoCompras.service';
import { FornecedorService } from 'src/app/service/fornecedor.service';

import {
  MessageService,
  ConfirmationService,
  MenuItem,
  SelectItem,
} from 'primeng/api';

@Component({
  selector: 'app-pedidoCompra',
  templateUrl: './pedidoCompra.component.html',
  styleUrls: ['./pedidoCompra.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class PedidoCompraComponent implements OnInit {
  pedidoCompra: PedidoCompras = {};
  fornecedor: Fornecedor = {};
  fornecedores: Fornecedor[] = [];
  resultsFornecedor: Fornecedor[] = [];


  constructor(
    private pedidoComprasService: PedidoComprasService,
    private fornecedorServico: FornecedorService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getPedidoCompra();
    this.getFornecedores();
  }

  getFornecedores(): void {
    this.fornecedorServico.getFornecedores().subscribe((fornecedores) => {
      this.fornecedores = fornecedores;
    });
  }

  getPedidoCompra(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id != 0) {
      this.pedidoComprasService.getPedidoCompras(id).subscribe(
        (pedidoCompra) => {
          this.pedidoCompra = pedidoCompra;
          console.log(this.pedidoCompra);
          this.fornecedor = pedidoCompra.Fornecedore!;
        },
        (error) => this.addErrorMessage(error)
      );
    }
  }

  addOrUpdatePedidoCompra() {
    if (this.pedidoCompra.id == null) {
      this.addPedidoCompra();
    } else {
      this.updatePedidoCompras();
    }
  }

  addPedidoCompra(): void {
    this.pedidoCompra.Fornecedore = this.fornecedor;
    this.pedidoCompra.FornecedoreId = this.fornecedor.id!;
    this.pedidoComprasService.addPedidoCompras(this.pedidoCompra).subscribe(
      (response: any) => (this.pedidoCompra.id = response.insertId),
      (error) => this.addErrorMessage(error)
    );
  }

  updatePedidoCompras(): void {
    this.pedidoCompra.Fornecedore = this.fornecedor;
    this.pedidoCompra.FornecedoreId = this.fornecedor.id!;
    this.pedidoComprasService.updatePedidoCompras(this.pedidoCompra).subscribe(
      (response: any) =>
        this.addSucessMessage('Pedido de compras alterado com sucesso.'),
      (error) => this.addErrorMessage(error)
    );
  }

  deletePedidoCompras(): void {
    this.pedidoComprasService.deletePedidoCompras(this.pedidoCompra).subscribe(
      (response: any) =>
        this.addSucessMessage('Pedido de compras apagado com sucesso.'),
      (error) => this.addErrorMessage(error)
    );
    const formulario: any = document.getElementById('form1');
    formulario.reset();
  }

  addErrorMessage(response: any) {
    this.messageService.add({
      severity: 'error',
      summary: 'Erro: ',
      detail: response.message,
    });
  }

  addSucessMessage(response: any) {
    this.messageService.add({
      severity: 'success',
      summary: 'Sucesso: ',
      detail: response,
    });
  }

  confirm() {
    this.confirmationService.confirm({
      message: 'Você tem certeza que deseja apagar esse pedido de compra?',
      accept: () => {
        this.deletePedidoCompras();
      },
    });
  }

  search(event: any) {
    this.resultsFornecedor = this.fornecedores.filter((fornecedor) => {
      return fornecedor.nome?.toLowerCase().includes(event.query.toLowerCase());
    });
  }
}
