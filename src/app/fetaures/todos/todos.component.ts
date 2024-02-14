import {ChangeDetectionStrategy, Component, inject, Signal} from "@angular/core";
import {TodoItemComponent} from "./todo-item.component";
import {TodoItemModel} from "./model/TodoItemModel";
import {ApiSignalTodoStore} from "./state/todoSignalStore";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  selector: "todos",
  imports: [
    TodoItemComponent
  ],
  template: `
    <div class="todos shadow-lg d-flex flex-column">
      <div class="border-bottom">
        <p class="lead" [class]="{'fw-bolder': todos().length > 0}">
          Your Task:
          <span style="font-size:0.87rem;">

          <span class="text-primary fw-bolder">{{ todos().length }}</span>
            @if (totalDone()> 0) {
              <span>&bkarow;<span class="text-muted">{{ totalDone()}} done!</span></span>
            }
          </span>
        </p>
      </div>
      <div>
        @if (loading()) {
          <div
            style="height: 400px;"
            class="d-flex flex-column justify-content-center align-items-center">
            <h3 class="text-muted opacity-50">Loading Todos...</h3>
          </div>
        } @else {
          @if (todos().length > 0) {
            @for (t of todos();track t.id) {
              <todo-item [todo]="t" />
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
      </div>

    </div>
  `
})
export class TodosComponent  {

  private store = inject(ApiSignalTodoStore);

  todosResponse = this.store.response;
  criteria = this.store.criteria;
  todos:Signal<TodoItemModel[]> = this.store.todos;
  loading = this.store.loading;
  totalDone = this.store.totalDone;
  markOrUnMarkTodo(t: TodoItemModel) {
    this.store.markTodo(t);
  }

  addTodo() {
    console.log("Add a new Todo Item");
  }

}
