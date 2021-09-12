import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';
import { ClienteResolverGuard } from './cliente-resolver.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path:'', component: LoginComponent},
  {path:'home', component: HomeComponent},
  {path:'clientes', component: ClientesComponent},
  {path:'novo', component: ClientesFormComponent, resolve:{ cliente: ClienteResolverGuard }},
  {path:'editar/:id', component: ClientesFormComponent, resolve:{ cliente: ClienteResolverGuard }},
];

export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
