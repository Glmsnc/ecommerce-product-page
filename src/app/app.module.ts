import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { IconCartComponent } from './components/icons/icon-cart/icon-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainLayoutComponent,
    ProductPageComponent,
    IconCartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
