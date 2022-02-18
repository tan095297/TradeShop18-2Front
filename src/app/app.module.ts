import { HostBinding, HostListener, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';


import { NewProductComponent } from './components/pages/new-product/new-product.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProductComponent } from './components/pages/product/product.component';

import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { TradeShopDirective } from './trade-shop.directive';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NewProductComponent,
    ProductComponent,
    LoginComponent,
    RegisterComponent,
    HomePageComponent,
    TradeShopDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

// @HostListener('dragover',['$event']) onDragOver(evt){
//   evt.preventDefault();
//   evt.stopPropagation();

//   console.log('Drag Over');
  
// }

// @HostListener('dragover',['$event']) public onDrageLeave(evt){
//   evt.preventDefault();
//   evt.stopPropagation();

//   console.log('Drag Leave');
  
// }

// @HostListener('drop',['$event']) public ondrop(evt){
//   evt.preventDefault();
//   evt.stopPropagation();
//   this.fileOver = false ;
//   const files = evt.dataTransfer.files;
//   if(files.length>0){
//     console.log(`You Dropped ${files.length} files.`);
//   }
// }

export class AppModule { }


// export class TradeShopDirective {
//   @HostBinding('class.fileover') fileOver:boolean;

//   constructor() { }

// }
