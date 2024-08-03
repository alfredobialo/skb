import {Component, OnInit} from '@angular/core';
import {TodosComponent} from "../../fetaures/todos/todos.component";

@Component({
  standalone: true,
  imports: [
    TodosComponent
  ],
  template: `
    <div class="d-flex justify-content-center align-items-center flex-fill p-4 flex-column">
      <p class=" playwrite-pe-400  text-lowercase" style="font-size : 3rem; color : #8f8b8b"><i
        class="me-4 la la-1x la-tasks text-warning-emphasis"></i>todo app</p>
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
