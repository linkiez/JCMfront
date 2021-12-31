/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PedidoComprasService } from './pedidoCompras.service';

describe('Service: PedidoCompras', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PedidoComprasService]
    });
  });

  it('should ...', inject([PedidoComprasService], (service: PedidoComprasService) => {
    expect(service).toBeTruthy();
  }));
});
