import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  constructor(private http: HttpClient) {}

  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(environment.BACKEND_HOST + 'produtos', {
      responseType: 'json',
    });
  }

  getProduto(id: number): Observable<Produto> {
    return this.http.get<Produto>(
      environment.BACKEND_HOST + 'produtos/id/' + id,
      { responseType: 'json' }
    );
  }

  addProduto(produto: Produto): Observable<Object> {
    return this.http.post(environment.BACKEND_HOST + 'produtos', produto, {
      responseType: 'json',
    });
  }

  updateProduto(produto: Produto): Observable<Object> {
    return this.http.put(
      environment.BACKEND_HOST + 'produtos/id/' + produto.id,
      produto,
      { responseType: 'json' }
    );
  }

  deleteProduto(produto: Produto): Observable<Object> {
    return this.http.delete(
      environment.BACKEND_HOST + 'produtos/id/' + produto.id,
      { responseType: 'json' }
    );
  }
}
