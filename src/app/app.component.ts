import { Component } from '@angular/core';
import { ServicosService } from './servicos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  



  mostrarMenu: boolean = false;





  constructor(private servico: ServicosService ){

  }



  

  ngOnInit(){
    this.servico.mostrarMenuEmitter.subscribe(
       mostrar => this.mostrarMenu = mostrar 
    )
  }

}
