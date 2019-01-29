import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message-confirm',
  templateUrl: './message-confirm.component.html',
  styleUrls: ['./message-confirm.component.scss']
})
export class MessageConfirmComponent implements OnInit {
  @Output() onClose = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onPopUpClose () {
    this.onClose.emit();
  }

}
