import { ActionReducerMap } from '@ngrx/store';
import * as fromTODOReducer from '../todo-store/todo-reducer';
export interface AppState {
  TODO: fromTODOReducer.TODOInterface;
}

export const AppRedcuerMapper: ActionReducerMap<AppState, any> = {
  TODO: fromTODOReducer.TODOReducer,
};
