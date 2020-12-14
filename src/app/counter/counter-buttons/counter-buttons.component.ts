import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css'],
})
export class CounterButtonsComponent implements OnInit {
  @Output() increment = new EventEmitter<void>();
  @Output() decrement = new EventEmitter<void>();
  @Output() reset = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}

  onIncrement() {
    this.increment.emit();
  }
  onDecrement() {
    this.decrement.emit();
  }

  onReset() {
    this.reset.emit();
  }
}
