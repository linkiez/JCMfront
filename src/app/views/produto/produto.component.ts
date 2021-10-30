import { Produto } from './../../models/produto';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from 'src/app/service/produto.service';
import { Location } from '@angular/common';
import { MessageService } from 'primeng/api';
import {ConfirmationService} from 'primeng/api'


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
  providers: [MessageService, ConfirmationService],
})
export class ProdutoComponent implements OnInit {
  @Input() produto: Produto = new Produto();

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private location: Location,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.getProduto();
  }

  getProduto(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id != 0) {
      this.produtoService.getProduto(id).subscribe(
        (produto) => (this.produto = produto),
        (error) => this.addErrorMessage(error)
      );

    }
    if (id == 0) {
      this.produto = new Produto();
    }
  }
  addOrUpdateProduto() {
    if (this.produto.id == null) {
      this.addProduct();
    } else {
      this.updateProduto();
    }
  }

  addProduct(): void {
    this.produtoService.addProduto(this.produto).subscribe(
      (response: any) => (this.produto.id = response.insertId),
      (error) => this.addErrorMessage(error)
    );
  }

  updateProduto(): void {
    this.produtoService.updateProduto(this.produto).subscribe(
      (response: any) => (this.addSucessMessage("Produto alterado com sucesso.")),
      (error) => this.addErrorMessage(error)
    );
  }

  deleteProduto():void {
    this.produtoService.deleteProduto(this.produto).subscribe(
      (response: any) => (this.addSucessMessage("Produto apagado com sucesso.")),
      (error) => this.addErrorMessage(error)
    );
  }

  goBack(): void {
    this.location.back();
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
        message: 'Você tem certeza que deseja apagar esse produto?',
        accept: () => {
          this.deleteProduto()
        }
    });
}

}
