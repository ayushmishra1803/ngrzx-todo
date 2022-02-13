import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { StoreService } from 'src/app/service/store.service';

@Component({
  selector: 'ngrx-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  constructor(private storeService: StoreService) {}

  @Input() todo: any;

  ngOnInit(): void {}
  deleteTodo(id: number) {}
}
