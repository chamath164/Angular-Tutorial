import {createReducer, on} from '@ngrx/store';
import {increment, decrement, reset, counterIncrement, changeChannelName} from './counter.action';
import {initialState} from './counter.state';

// tslint:disable-next-line:variable-name
const _counterReducer = createReducer(initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(counterIncrement, (state, action) => {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  }),
  on(changeChannelName, (state) => {
    return {
      ...state,
      channelName: 'Modified Web Dev',
    };
  })
);

export function counterReducer(state, action): any {
  return _counterReducer(state, action);
}
