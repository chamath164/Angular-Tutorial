import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {changeChannelName, counterIncrement} from '../state/counter.action';
import {getChannelName} from '../state/counter.selectors';
import {Observable} from 'rxjs';
import {AppState} from '../../store/app.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {
  value: number;
  channelName$: Observable<string>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.channelName$ = this.store.select(getChannelName);
  }

  onAddCount(): void {
    this.store.dispatch(counterIncrement({value: +this.value}));
  }

  changeChannelName(): void {
    this.store.dispatch(changeChannelName());
  }
}
