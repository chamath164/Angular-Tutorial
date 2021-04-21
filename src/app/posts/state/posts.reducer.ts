import {createReducer} from '@ngrx/store';
import {initialState} from './posts.state';

// tslint:disable-next-line:variable-name
const _postsReducer = createReducer(initialState);

export function postsReducer(state, action): any {
  return _postsReducer(state, action);
}
