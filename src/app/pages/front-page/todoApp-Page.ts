import {Component, OnInit} from '@angular/core';
import {TodosComponent} from "../../fetaures/todos/todos.component";

@Component({
  standalone: true,
  selector: 'todo-app-page',
  imports: [
    TodosComponent
  ],
  template: `
    <div class="d-flex justify-content-center align-items-center flex-fill p-4">
      <todos />
    </div>
   `
})

export class TodoAppPage implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
