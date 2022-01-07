import { Fornecedor } from './../../models/fornecedor';
import { Component, OnInit } from '@angular/core';
import { FornecedorService } from 'src/app/service/fornecedor.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.scss'],
  providers: [MessageService]
})
export class FornecedoresComponent implements OnInit {
  fornecedores: Fornecedor[] = []
  first = 0;

  rows = 10;

  constructor(private fornecedorService: FornecedorService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getFornecedores()
  }

  getFornecedores(){
    this.fornecedorService.getFornecedores().subscribe((fornecedores) => (this.fornecedores = fornecedores),  (error) => this.addErrorMessage(error))
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
    return this.fornecedores
      ? this.first === this.fornecedores.length - this.rows
      : true;
  }

  isFirstPage(): boolean {
    return this.fornecedores ? this.first === 0 : true;
  }

  addErrorMessage(error: any) {
    this.messageService.add({severity:'error', summary: 'Erro: ', detail: error.message});
  }
}
