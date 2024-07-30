import {Component, OnInit} from '@angular/core';
import {TodosComponent} from "../../fetaures/todos/todos.component";

@Component({
  standalone: true,
  imports: [
    TodosComponent
  ],
  template: `
    <div class="d-flex justify-content-center align-items-center flex-fill p-4">
      <ea-Todos />
    </div>
   `
})

export class TodoAppPage implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
