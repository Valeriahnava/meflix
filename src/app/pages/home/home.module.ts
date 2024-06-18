import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';



@NgModule({
  declarations: [
    HomeComponent,
    EncabezadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponent
  ]

})
export class HomeModule { }
