import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { empty, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ServicosService } from '../servicos.service';
import { Clientes } from './clientes';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
  preserveWhitespaces: true
})
export class ClientesComponent implements OnInit {


  clientes$?: Observable<Clientes[]>;
  error$ = new Subject<boolean>();
  cliente!: Clientes[]; //EXCLUIR
  deleteModalRef?: BsModalRef;
  @ViewChild('deleteModal') deleteModal: any
  queryField= new FormControl()

  idBuscado: any;
  cli: any;

  constructor(private servicos: ServicosService,private http: HttpClient, private router: Router, private route: ActivatedRoute, private modalService: BsModalService) {  }


  ngOnInit() {

  this.Refresh();

  }


  buscarId(){
    this.servicos.buscarNome(this.idBuscado).subscribe(dados => this.cli = dados)
  }


  Editar(id: number){
    this.router.navigate(['/editar', id], {relativeTo: this.route})
  }



  Excluir(cliente: any){ // EXCLUIR
    
      this.cliente = cliente
      this.deleteModalRef = this.modalService.show(this.deleteModal, {class: 'modal-sm'});
      //this.servicos.showConfirm("Excluir","Deseja Excluir o cliente?")
      /**/

    
  }

  decline(){
    this.deleteModalRef?.hide()
  }

  confirm(){
      let msgSucesso = 'Cliente deletado com sucesso';
      let msgErro = 'Erro ao deletar cliente';

      this.servicos.delete(this.cliente).subscribe(
        success=> { this.servicos.alertSuccess(msgSucesso,3000); this.Refresh(); this.deleteModalRef?.hide() },
        error => this.servicos.alertDanger(msgErro))
        
  }





  Refresh(){
    this.clientes$ = this.servicos.list().pipe(catchError(  error =>  { console.log(error); this.servicos.alertDanger("Erro ao carregar Clientes"); this.error$.next(true)  ; return empty();   } ))
    this.servicos.list().subscribe( dados => { this.cliente = dados} , error => console.log(error), () => console.log("Observable completo"))
  }








  


}
