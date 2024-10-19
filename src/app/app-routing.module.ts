import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './components/cliente/cliente.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { AuthComponent } from './components/auth/auth.component';
import { RoomsFormComponent } from './components/rooms/rooms-form.component';

const routes: Routes = [
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {path: 'cliente', component: ClienteComponent},
  {path: 'empleado', component: EmpleadoComponent},
  {path: 'rooms', component: RoomsComponent},
  {path: 'rooms/form', component: RoomsFormComponent},
  {path: 'auth', component: AuthComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
