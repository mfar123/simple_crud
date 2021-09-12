import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  @Input() message: string = '';
  @Input() type: string = 'success';

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  Close(){
    this.bsModalRef.hide();
  }

}
