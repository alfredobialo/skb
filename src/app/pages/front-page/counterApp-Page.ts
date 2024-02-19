import {Component, OnInit} from '@angular/core';
import {CounterComponent} from "../../fetaures/counter/counterComponent";

@Component({
  standalone: true,
  selector: 'counter-app-page',
  imports: [
    CounterComponent
  ],
  template: `
    <counter-component />
  `
})

export class CounterAppPage implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
