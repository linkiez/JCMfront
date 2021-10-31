import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';

import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ProdutosComponent } from './views/produtos/produtos.component';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { CardModule } from 'primeng/card';
import { ProdutoComponent } from './views/produto/produto.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FornecedoresComponent } from './views/fornecedores/fornecedores.component';
import { FornecedorComponent } from './views/fornecedor/fornecedor.component';
import { InputMaskModule } from 'primeng/inputmask';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ProdutosComponent,
    ProdutoComponent,
    FornecedoresComponent,
    FornecedorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    MenubarModule,
    TableModule,
    ButtonModule,
    HttpClientModule,
    MessagesModule,
    MessageModule,
    CardModule,
    FormsModule,
    BrowserAnimationsModule,
    ConfirmDialogModule,
    InputMaskModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
