import { Produto } from './../../models/produto';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutoService } from 'src/app/service/produto.service';
import { Location } from '@angular/common';



@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  @Input() produto?: Produto;

  constructor(private route: ActivatedRoute, private produtoService: ProdutoService, private location: Location) { }

  ngOnInit(): void {
    this.getProduto();
  }

  getProduto(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if(id != null){
      this.produtoService.getProduto(id).subscribe((produto) => (this.produto = produto));
    }if(id == null){
      this.produto = new Produto()
    }
  }

  goBack(): void {
    this.location.back();
  }
}
