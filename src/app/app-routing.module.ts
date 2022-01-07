import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './views/produtos/produtos.component';
import { ProdutoComponent } from './views/produto/produto.component';
import { FornecedoresComponent } from './views/fornecedores/fornecedores.component';
import { FornecedorComponent } from './views/fornecedor/fornecedor.component';
import { PedidosComprasComponent } from './views/pedidosCompras/pedidosCompras.component';
import { PedidoCompraComponent } from './views/pedidoCompra/pedidoCompra.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'produto/:id', component: ProdutoComponent },
  { path: 'produto', component: ProdutoComponent },
  { path: 'fornecedores', component: FornecedoresComponent },
  { path: 'fornecedor', component: FornecedorComponent },
  { path: 'fornecedor/:id', component: FornecedorComponent },
  { path: 'pedidoscompras', component: PedidosComprasComponent},
  { path: 'pedidocompra/:id', component: PedidoCompraComponent},
  { path: 'pedidocompra', component: PedidoCompraComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
