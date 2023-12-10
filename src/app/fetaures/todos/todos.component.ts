import {Component, computed, inject, OnInit, signal, Signal} from "@angular/core";
import {TodoService} from "./services/todo.service";

@Component({
  standalone: true,
  selector: "todos",
  imports: [],
  template: `
    <div class="todos shadow-lg d-flex flex-column">
      <div class="border-bottom">
        <p class="lead"
           [class]="{'fw-bolder': items().length > 0}"
        >Your Task</p>
      </div>
      <div>
        @if(loading){
          <div
            style="height: 400px;"
            class="d-flex flex-column justify-content-center align-items-center">
            <h3 class="text-muted opacity-50">Loading Todos...</h3>
          </div>
        }
        @else {
          @if (items().length > 0) {
            @for (t of items();track t.id) {
              <div class="my-2 px-2">
                <p class="">{{ t.title }}</p>
              </div>
            }
          } @else {
            <div
              style="height: 400px;"
              class="d-flex flex-column justify-content-center align-items-center">
              <h3 class="text-muted opacity-50">No Todos</h3>
              <button (click)="addTodo()" class="btn btn-outline-primary">Add Todo</button>
            </div>

          }
        }

      </div>
    </div>
  `
})
export class TodosComponent implements OnInit {

  loading: boolean = false;
  todosResponse = signal<any>({
    data: [],
    success: false,
    message: "No Todos",
    currentPage: 1,
    pageSize: 7
  });
  items = signal<any>([]);

  constructor(private todoService: TodoService) {
  }
  ngOnInit() {
    this.loading = true;
    this.todoService.getTodos({})
      .subscribe({
        next: x => {
          this.todosResponse = signal<any>(x);
          this.items.set( this.todosResponse().data);
        },
        complete: () => {
          this.loading = false;
          console.log(this.loading, "Items", this.items())
        },
        error: err => console.log(err)
      });
  }

  addTodo() {
    console.log("Add a new Todo Item");
  }
}
