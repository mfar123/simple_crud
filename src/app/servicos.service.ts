import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { Usuarios } from './login/usuarios';
import { HttpClient } from '@angular/common/http';
import { Clientes } from './clientes/clientes';
import { environment } from 'src/environments/environment';
import { delay, take } from 'rxjs/operators';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PopUpComponent } from './pop-up/pop-up.component';
import { ConfirmWindowComponent } from './confirm-window/confirm-window.component';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicosService implements OnInit {



  bsModalRef: BsModalRef = new BsModalRef;

  constructor(private router: Router, private http: HttpClient,  private modalService: BsModalService) { }


  ngOnInit() {

  }

  public usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  private readonly API = `${environment.API}clientes` ;
  private readonly APIC = `http://localhost:3000/clientes/` ;

  private readonly API_USERS = 'http://localhost:3000/usuarios' ;

  buscarNome(idBuscado: number){
    return this.http.get<Clientes>(this.APIC + idBuscado);
  }
  



  fazerLogin(usuario: Usuarios){

    
    if(usuario.senha === "marimar" && usuario.nome === "michael"){

      this.usuarioAutenticado = true;

      this.mostrarMenuEmitter.emit(true)

      this.router.navigate(['/login'])

    }else{

      this.usuarioAutenticado = false;
      this.router.navigate(['/'])
      this.alertDanger("Erro ao logar")
      
    }




  }







  CarregarPeloID(id: number){
    return this.http.get<Clientes>(`${this.API}/${id}`).pipe(take(1))
  }











  list(){
    return this.http.get<Clientes[]>(this.API)
  }


  listUsuarios(){
    return this.http.get<Usuarios[]>(this.API_USERS)
  }




  create(cliente: Clientes){

    return this.http.post(this.API,cliente).pipe(take(1))
  }



  update(cliente: Clientes){
    return this.http.put(`${this.API}/${cliente.id}`,cliente).pipe(take(1))
  }

  delete(cliente: any){
    return this.http.delete(`${this.API}/${cliente.id}`).pipe(take(1)) 
  }



  showConfirm(title: string, msg: string, okTxt?: string, cancelTxt?: string){
    this.bsModalRef = this.modalService.show(ConfirmWindowComponent)
    this.bsModalRef.content.title = title
    this.bsModalRef.content.message = msg

    if(okTxt){this.bsModalRef.content.okTxt = okTxt}
    if(cancelTxt){this.bsModalRef.content.cancelTxt = cancelTxt}
    
  }



  alertDanger(message:string){

    this.bsModalRef = this.modalService.show(PopUpComponent)
    this.bsModalRef.content.type = 'danger'
    this.bsModalRef.content.message = message

  }

  alertSuccess(message:string, time?:number){

    this.bsModalRef = this.modalService.show(PopUpComponent)
    this.bsModalRef.content.type = 'success'
    this.bsModalRef.content.message = message

    if(time){
      setTimeout( () => this.bsModalRef.hide(), time )
    }

  }




  save(cliente: Clientes){
    if(cliente.id){
      return this.update(cliente)
    } else {
      return this.create(cliente)
    }
  }




  
}
