import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { PedidoCompras } from '../models/pedidoCompras';

@Injectable({
  providedIn: 'root',
})
export class PedidoComprasService {
  constructor(private http: HttpClient) {}

  getPedidosCompras(): Observable<PedidoCompras[]> {
    return this.http.get<PedidoCompras[]>(
      environment.BACKEND_HOST + 'pedidocompras',
      { responseType: 'json' }
    );
  }

  getPedidoCompras(id: number): Observable<PedidoCompras> {
    return this.http.get<PedidoCompras>(
      environment.BACKEND_HOST + 'pedidocompras/id/' + id,
      { responseType: 'json' }
    );
  }

  addPedidoCompras(pedidocompras: PedidoCompras): Observable<Object> {
    return this.http.post(
      environment.BACKEND_HOST + 'pedidocompras/',
      pedidocompras,
      { responseType: 'json' }
    );
  }

  updatePedidoCompras(pedidocompras: PedidoCompras): Observable<Object> {
    return this.http.put(
      environment.BACKEND_HOST + 'pedidocompras/id/' + pedidocompras.id,
      pedidocompras,
      { responseType: 'json' }
    );
  }

  deletePedidoCompras(pedidocompras: PedidoCompras): Observable<Object> {
    return this.http.delete(
      environment.BACKEND_HOST + 'pedidocompras/id/' + pedidocompras.id,
      { responseType: 'json' }
    );
  }
}
