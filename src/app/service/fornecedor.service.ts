import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fornecedor } from '../models/fornecedor';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FornecedorService {
  constructor(private http: HttpClient) {}

  getFornecedores(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(environment.BACKEND_HOST+'fornecedores', {responseType:'json'})
  }

  getFornecedor(id: number): Observable<Fornecedor>{
    return this.http.get<Fornecedor>(environment.BACKEND_HOST+'fornecedores/id/' + id, {responseType:'json'})
  }

  addFornecedor(fornecedor: Fornecedor): Observable<Object>{
    return this.http.post(environment.BACKEND_HOST + "fornecedores", fornecedor, {responseType:'json'})
  }

  updateFornecedor(fornecedor: Fornecedor): Observable<Object>{
    return this.http.put(environment.BACKEND_HOST + "fornecedores/id/"+fornecedor.id, fornecedor, {responseType:'json'})
  }

  deleteFornecedor(fornecedor: Fornecedor): Observable<Object> {
    return this.http.delete(environment.BACKEND_HOST + "fornecedores/id/"+fornecedor.id, {responseType:'json'})
  }
}
