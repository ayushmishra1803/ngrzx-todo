import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'ngrx-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit, OnChanges {
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.todo);
  }
  @Input() todo: any;

  ngOnInit(): void {}
}
