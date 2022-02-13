import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngrx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() TODO: any[] = [];

  constructor() {}

  ngOnInit(): void {}
}
