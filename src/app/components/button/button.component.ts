import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngrx-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  constructor() {}
  @Input() buttonLabel: string = '';
  @Input() buttonColor: string = '';
  @Output() buttonClicked: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {}
  onClick(){
    this.buttonClicked.emit()
  }
}
