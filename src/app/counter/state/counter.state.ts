export interface CounterState {
  counter: number;
  channelName: string;
}

export const initialState: CounterState = {
  counter: 0,
  channelName: 'New Web Dev',
};
