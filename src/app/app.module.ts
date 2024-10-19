import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthComponent } from './components/auth/auth.component';
import { LayoutModule } from './layout/layout.module';
import { RoomsFormComponent } from './components/rooms/rooms-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    EmpleadoComponent,
    ClienteComponent,
    RegisterComponent,
    AuthComponent,
    RoomsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
