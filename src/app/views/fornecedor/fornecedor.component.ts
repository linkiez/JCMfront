import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fornecedor } from 'src/app/models/fornecedor';
import { FornecedorService } from 'src/app/service/fornecedor.service';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css'],
  providers: [MessageService, ConfirmationService],
})
export class FornecedorComponent implements OnInit {
  fornecedor: Fornecedor = new Fornecedor();

  constructor(
    private route: ActivatedRoute,
    private fornecedorServico: FornecedorService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.getFornecedor();
  }

  getFornecedor(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id != 0) {
      this.fornecedorServico.getFornecedor(id).subscribe(
        (fornecedor) => (this.fornecedor = fornecedor),
        (error) => this.addErrorMessage(error)
      );
    }
  }

  addOrUpdateFornecedor() {
    if (this.fornecedor.id == null) {
      this.addFornecedor();
    } else {
      this.updateFornecedor();
    }
  }
  addFornecedor(): void {
    this.fornecedorServico.addFornecedor(this.fornecedor).subscribe(
      (response: any) => (this.fornecedor.id = response.insertId),
      (error) => this.addErrorMessage(error)
    );
  }

  updateFornecedor(): void {
    this.fornecedorServico.updateFornecedor(this.fornecedor).subscribe(
      (response: any) =>
        this.addSucessMessage('Fornecedor alterado com sucesso.'),
      (error) => this.addErrorMessage(error)
    );
  }

  deleteFornecedor(): void {
    this.fornecedorServico.deleteFornecedor(this.fornecedor).subscribe(
      (response: any) =>
        this.addSucessMessage('Fornecedor apagado com sucesso.'),
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
      message: 'Você tem certeza que deseja apagar esse fornecedor?',
      accept: () => {
        this.deleteFornecedor();
      },
    });
  }
}
