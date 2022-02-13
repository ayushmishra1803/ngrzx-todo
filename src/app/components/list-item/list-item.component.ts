import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngrx-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  constructor() {}
  @Input() todo: any;

  ngOnInit(): void {}
}
