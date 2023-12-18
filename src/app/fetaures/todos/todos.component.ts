import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {TodoService} from "./services/todo.service";
import {TodoItemComponent} from "./todo-item.component";
import {PagedApiResponse, TodoItemModel} from "./model/TodoItemModel";
import {NgrxTodoComponent} from "./ngrx-todo/ngrx-todo.component";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  selector: "todos",
  imports: [
    TodoItemComponent,
    NgrxTodoComponent
  ],
  template: `
    <div class="todos shadow-lg d-flex flex-column">
      <div class="border-bottom">
        <p class="lead" [class]="{'fw-bolder': items.length > 0}">
          Your Task:
          <span style="font-size:0.87rem;">

          <span class="text-primary fw-bolder">{{ items.length }}</span>
            @if (totalCompleted> 0) {
              <span>&bkarow;<span class="text-muted">{{ totalCompleted}} done!</span></span>
            }
          </span>
        </p>
      </div>
      <div>
        @if (loading) {
          <div
            style="height: 400px;"
            class="d-flex flex-column justify-content-center align-items-center">
            <h3 class="text-muted opacity-50">Loading Todos...</h3>
          </div>
        } @else {
          @if (items.length > 0) {
            @for (t of items;track t.id) {
              <todo-item [todo]="t" (onMarked)="getTotalMarked($event)" />
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
      <div>
        <app-ngrx-todo />
      </div>

    </div>
  `
})
export class TodosComponent implements OnInit {

  loading: boolean = false;
  todosResponse : PagedApiResponse<TodoItemModel[]> = {
    data: [],
    success: false,
    message: "No Todos",
    currentPage: 1,
    pageSize: 7
  };
  items = Array.of<TodoItemModel>();
  get totalCompleted () {
    return this.items.filter(x => x.isDone == true).length;
  };
  constructor(private todoService: TodoService) {
  }
  ngOnInit() {
    this.loading = true;
    this.todoService.getTodos({})
      .subscribe({
        next: x => {
          this.todosResponse = x;
          this.items =  x.data;
        },
        complete: () => {
          this.loading = false;
        },
        error: err => console.log(err)
      });
  }

  addTodo() {
    console.log("Add a new Todo Item");
  }

  getTotalMarked(todo: TodoItemModel) {
    var totalsCompleted  = this.totalCompleted;
    console.log("EVENT Called:" ,todo, "totalCompleted", this.totalCompleted);
  }
}
