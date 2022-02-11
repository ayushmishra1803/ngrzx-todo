import { TODO } from '../interface/todo.interface';
import * as fromTODOActions from './todo.actions';

export interface TODOInterface {
  todo: TODO[];
}
const initalState: TODOInterface = {
  todo: [],
};
export function TODOReducer(
  state: TODOInterface = initalState,
  action: fromTODOActions.TODOActionType
) {
  switch (action.type) {
    case fromTODOActions.ADD_TODO:
      const todo = [...state.todo];
      todo.push(action.payload);
      return { ...state, todo: todo };
    default:
      return state;
  }
}
