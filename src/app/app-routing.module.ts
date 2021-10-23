import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './views/produtos/produtos.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
