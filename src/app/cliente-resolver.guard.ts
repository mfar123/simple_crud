import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Clientes } from './clientes/clientes';
import { ServicosService } from './servicos.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteResolverGuard implements Resolve<Clientes> {

  constructor(private service: ServicosService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Clientes> | Promise<Clientes> {

    if (route.params && route.params['id']) {
      return this.service.CarregarPeloID(route.params['id'])
    }

    return of({
      id: null,
      nome: null,
      endereco: null
    })


  }
}




