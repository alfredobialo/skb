import {Component} from "@angular/core";
@Component({
  standalone: true,
  selector: "todos",
  imports: [

  ],
  template: `
    <div class="todos shadow-lg d-flex flex-column">
      <div class="border-bottom">
        <p class="lead"
           [class]="{'fw-bolder': items.length > 0}"
        >Your Task</p>
      </div>
      <div>
        @if (items.length > 0) {

        } @else {
          <div #myDiv
            style="height: 400px;"
            class="d-flex flex-column justify-content-center align-items-center">
            <h3 class="text-muted opacity-50">No Todos</h3>
            <button (click)="addTodo()" class="btn btn-outline-primary">Add Todo</button>
          </div>

        }
      </div>
    </div>
  `
})
export class TodosComponent {
items = [];

  addTodo() {
    console.log("Add a new Todo Item");
  }
}
