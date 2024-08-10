import {Component, OnInit} from '@angular/core';
import {CounterComponent} from "../../fetaures/counter/counterComponent";

@Component({
  standalone: true,
  selector: 'counter-app-page',
  imports: [
    CounterComponent
  ],
  template: `
    <div class="bg-white rounded-3 border-1 p-3 align-items-stretch d-flex flex-wrap justify-content-evenly">
      <ea-counter bgColor="#429833" />
      <ea-counter bgColor="#dc9f43" />
      <ea-counter bgColor="#3c3b3d76" />
      <ea-counter />
    </div>


  `
})

export class CounterAppPage implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
