import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, tap } from 'rxjs';
import { StoreService } from './service/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private storeService: StoreService) {}
  ngOnInit(): void {
    this.TODO$ = this.storeService.getAllTODO().pipe(
      tap((res) => {
        console.log(res);
      })
    );
  }
  TODO$: Observable<any> = new Observable();
  toDoFormControl: FormControl = new FormControl();
  addTodo() {
    this.storeService.addTODO(this.toDoFormControl.value);
  }
}
