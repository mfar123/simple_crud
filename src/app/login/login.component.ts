import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicosService } from '../servicos.service';
import { Usuarios } from './usuarios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   usuario: Usuarios = new Usuarios();
   user: Usuarios[] = [];


  constructor(private servicos: ServicosService, private router: Router) { }

  ngOnInit() {
    this.servicos.listUsuarios().subscribe( dados => this.user = dados)
  }



  fazerLogin(usuario: Usuarios){
    
    let indice=0;
    let is=false;
    for(let i=0; i<this.user.length; i++){
      if(usuario.nome == this.user[i].nome && usuario.senha == this.user[i].senha ){
        indice=i;
        is=true;
      }
    }
    if(is==true){
      if(usuario.nome == this.user[indice].nome && usuario.senha == this.user[indice].senha ){
        this.servicos.usuarioAutenticado = true;
         this.servicos.mostrarMenuEmitter.emit(true)
         this.router.navigate(['/login'])
      }
    }else{
      console.log(usuario.nome)
      this.servicos.usuarioAutenticado = false;
      this.router.navigate(['/'])
      this.servicos.alertDanger("Erro ao logar")
    }    
}
}
