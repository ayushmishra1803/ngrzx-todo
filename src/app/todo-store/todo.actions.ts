import { Action } from '@ngrx/store';

export const ADD_TODO = '[TODO] ADD_TODO';
export const DELETE_TODO = '[TODO] DELETE_TODO';
export const START_EDIT_TODO = '[TODO] START_EDIT_TODO';
export const CLOSE_EDIT_TODO = '[TODO] CLOSE_EDIT_TODO';
export class AddTodo implements Action {
  readonly type: string = ADD_TODO;
  constructor(public payload: any) {}
}
export class DeleteTodo implements Action {
  readonly type: string = DELETE_TODO;
  constructor(public payload: number) {}
}
export class StartEditTodo implements Action {
  readonly type: string = START_EDIT_TODO;
  constructor(public payload: number) {}
}
export class CloseEditTodo implements Action {
  readonly type: string = CLOSE_EDIT_TODO;
  constructor(public payload: any) {}
}

export type TODOActionType =
  | AddTodo
  | DeleteTodo
  | StartEditTodo
  | CloseEditTodo;
