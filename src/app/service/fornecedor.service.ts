import { Injectable } from '@angular/core';
import { backendHost } from '../config/parameters';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fornecedor } from '../models/fornecedor';

@Injectable({
  providedIn: 'root',
})
export class FornecedorService {
  constructor(private http: HttpClient) {}

  getFornecedores(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(backendHost+'fornecedor', {responseType:'json'})
  }

  getFornecedor(id: number): Observable<Fornecedor>{
    return this.http.get<Fornecedor>(backendHost+'fornecedor/' + id, {responseType:'json'})
  }

  addFornecedor(fornecedor: Fornecedor): Observable<Object>{
    return this.http.post(backendHost + "fornecedor", fornecedor, {responseType:'json'})
  }

  updateFornecedor(fornecedor: Fornecedor): Observable<Object>{
    return this.http.put(backendHost + "fornecedor/"+fornecedor.id, fornecedor, {responseType:'json'})
  }

  deleteFornecedor(fornecedor: Fornecedor): Observable<Object> {
    return this.http.delete(backendHost + "fornecedor/"+fornecedor.id, {responseType:'json'})
  }
}
