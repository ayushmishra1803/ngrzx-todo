import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'ngrx-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  constructor() {}
  @Input() formControl: FormControl = new FormControl();
  @Input() inputLabel: string = '';

  ngOnInit(): void {}
}
