import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';

import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ProdutosComponent } from './views/produtos/produtos.component';

import { TableModule } from 'primeng/table';
import {ButtonModule} from 'primeng/button';

import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';





@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ProdutosComponent,
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
    MessageModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
