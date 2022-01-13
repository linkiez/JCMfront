import { PedidoComprasItens } from './../../../models/pedidoCompras';
import { Component, OnInit, Input } from '@angular/core';
import { ProdutoService } from 'src/app/service/produto.service';
import { Produto } from 'src/app/models/produto';

@Component({
  selector: 'app-tabelaPedidoCompra',
  templateUrl: './tabelaPedidoCompra.component.html',
  styleUrls: ['./tabelaPedidoCompra.component.scss'],
})
export class TabelaPedidoCompraComponent implements OnInit {
  @Input() pedidoComprasItens: PedidoComprasItens[] = [];
  produtos: Produto[] = [];
  resultsProduto: Produto[] = [];

  total: number = 0;
  totalIpi: number = 0;
  totalIpiFrete: number = 0;

  constructor(private produtoService: ProdutoService) {}

  ngOnInit() {
    this.getProdutos();

  }

  ngOnChanges(){
    this.calculaTotais();
  }

  getProdutos() {
    this.produtoService.getProdutos().subscribe((produtos) => {
      this.produtos = produtos;
    });
  }

  search(event: any) {
    this.resultsProduto = this.produtos.filter((produtos) => {
      return produtos.nome?.toLowerCase().includes(event.query.toLowerCase());
    });
  }

  addItem(){
    this.pedidoComprasItens.push(
      {
        dimensao: '',
        quantidade: 0,
        peso: 0,
        preco: 0,
        ipi: 0,
        prazo: new Date(),
        Produto: {
          nome: '',
          categoria: '',
          espessura: 0,
          peso: 0,
        }
      }
    )
  }

  calculaTotais(): void {
    let itens = this.pedidoComprasItens;
    let total = 0
    let totalIpi = 0
    itens.forEach(item => {
      console.log();
      total = total + (item.peso! * item.preco!);
      totalIpi = totalIpi + ((item.peso! * item.preco!) * (1 + Number(item.ipi!) ));
    })
    this.total = total;
    this.totalIpi = totalIpi;
    }
}
