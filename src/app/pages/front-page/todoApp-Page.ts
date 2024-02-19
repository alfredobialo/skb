import {Component, OnInit} from '@angular/core';
import {TodosComponent} from "../../fetaures/todos/todos.component";

@Component({
  standalone: true,
  selector: 'todo-app-page',
  imports: [
    TodosComponent
  ],
  template: `
    <todos />`
})

export class TodoAppPage implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
