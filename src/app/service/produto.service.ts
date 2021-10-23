import { backendHost } from './../config/paramenters';
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
    return this.http.get<Produto[]>(backendHost + 'produtos', {responseType:'json'});
  }
}
