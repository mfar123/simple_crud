import { Component, OnInit } from '@angular/core';
import {Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicosService } from '../servicos.service';
import { ActivatedRoute } from '@angular/router';
import { Clientes } from '../clientes/clientes';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.scss']
})
export class ClientesFormComponent implements OnInit {
  
  form!: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder, private service: ServicosService, private location: Location, private route: ActivatedRoute) { }







  
  ngOnInit() {

    const cliente = this.route.snapshot.data['cliente']

    this.form = this.fb.group({
      id: [cliente.id],
      nome:[cliente.nome, [Validators.required]],
      endereco: [cliente.endereco]
    })
  }








  Submit(){
    this.submitted = true;
    if(this.form.valid){

      let msgSucesso = 'Cliente criado com sucesso';
      let msgErro = 'Erro ao criar cliente';

      if(this.form.value.id){
        msgSucesso = 'Cliente atualizado com sucesso';
        msgErro = 'Erro ao atualizar cliente';
      } 

      this.service.save(this.form.value).subscribe(
        success=> { this.service.alertSuccess(msgSucesso,3000); this.location.back() },
        error => this.service.alertDanger(msgErro),
      )
    } 
  }
  






  
  hasError(field: string){
    return this.form.get(field)?.errors
  }
}
