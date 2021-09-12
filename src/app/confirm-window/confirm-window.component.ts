import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirm-window',
  templateUrl: './confirm-window.component.html',
  styleUrls: ['./confirm-window.component.scss'],
  preserveWhitespaces: true
})
export class ConfirmWindowComponent implements OnInit {

  @Input() title: string= '';
  @Input() content: string = '';
  @Input() confirm: string = 'Ok';
  @Input() decline: string = 'Cancelar';

  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  close(){
    this.bsModalRef.hide()
  }
  confirmar(){}


}
