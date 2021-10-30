import { backendHost } from '../config/parameters';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto';


@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  constructor(
    private http: HttpClient
  ) {}

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(backendHost + 'produto', {responseType:'json'});
  }

  getProduto(id: number): Observable<Produto>{
    return this.http.get<Produto>(backendHost + 'produto/'+id, {responseType:'json'})
  }

  addProduto(produto: Produto): Observable<Object>{
    return this.http.post(backendHost + "produto", produto, {responseType:'json'})
  }

  updateProduto(produto: Produto): Observable<Object>{
    return this.http.put(backendHost + "produto/"+produto.id, produto, {responseType:'json'})

  }

  deleteProduto(produto: Produto): Observable<Object> {
    return this.http.delete(backendHost + "produto/"+produto.id, {responseType:'json'})
  }
}
