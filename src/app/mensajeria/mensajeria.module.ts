import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { ContactosComponent } from './contactos/contactos.component';
import { MensajesComponent } from './contactos/mensajes/mensajes.component';
import { MensajeriaRoutingModule } from './mensajeria-routing.module';
import { MatCardModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MensajeriaRoutingModule,
    MatCardModule,
    BrowserModule,
    FormsModule
  ],
  declarations: [
    ContactosComponent,
    MensajesComponent
  ],
  providers: []
})
export class MensajeriaModule {}