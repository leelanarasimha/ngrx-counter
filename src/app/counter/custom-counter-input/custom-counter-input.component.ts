import { customIncrement } from './../state/counter.actions';
import { CounterState } from './../state/counter.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css'],
})
export class CustomCounterInputComponent implements OnInit {
  value: number;

  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit(): void {}

  onAdd() {
    this.store.dispatch(customIncrement({ count: +this.value }));
  }
}
