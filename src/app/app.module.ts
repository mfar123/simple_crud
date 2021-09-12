import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServicosService } from './servicos.service';
import { ClientesComponent } from './clientes/clientes.component';
import { HttpClientModule } from '@angular/common/http';
import { PopUpComponent } from './pop-up/pop-up.component';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { ConfirmWindowComponent } from './confirm-window/confirm-window.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ClientesComponent,
    PopUpComponent,
    ClientesFormComponent,
    ConfirmWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [ServicosService, BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
