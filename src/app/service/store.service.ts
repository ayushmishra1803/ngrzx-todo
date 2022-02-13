import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { TODO } from '../interface/todo.interface';
import { AppState } from '../store/app.reducer';
import { TODOInterface } from '../todo-store/todo-reducer';
import * as TODOActions from '../todo-store/todo.actions';

@Injectable({ providedIn: 'root' })
export class StoreService {
  constructor(private store: Store<AppState>) {}
  addTODO(title: string) {
    const initalId = Math.random();
    const data: TODO = { title: title, id: initalId, isEdit: false };
    this.store.dispatch(new TODOActions.AddTodo(data));
  }
  deleteTodo(id: number) {
    this.store.dispatch(new TODOActions.DeleteTodo(id));
  }
  startEdit(id: number) {
    this.store.dispatch(new TODOActions.StartEditTodo(id));
  }
  getAllTODO() {
    return this.store.select('TODO');
  }
}
