import {ChangeDetectionStrategy, Component, EnvironmentInjector, inject, Injector, runInInjectionContext, Signal} from "@angular/core";
import {TodoItemComponent} from "./todo-item.component";
import {TodoItemModel} from "./model/TodoItemModel";
import {ApiSignalTodoStore} from "./state/todoSignalStore";
import {AddTodoComponent} from "./add-todo.component";
import {ToastModule} from "primeng/toast";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  selector: "todos",
  imports: [
    TodoItemComponent,
    AddTodoComponent,
    ToastModule
  ],
  template: `
    <div class="todos shadow d-flex flex-column">
      <div class="border-bottom d-flex justify-content-between align-items-center">
        <p class="lead" [class]="{'fw-bolder': todos().length > 0}">
          Your Task:
          <span style="font-size:0.87rem;">

          <span class="text-primary fw-bolder">{{ todos().length }}</span>
            @if (totalDone() > 0) {
              <span>&bkarow;<span class="text-muted">{{ totalDone() }} done!</span></span>
            }
          </span>
        </p>
        <span><button class="btn btn-link" (click)="refresh()">refresh</button></span>
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
              <add-todo />
              <div class=" p-2" style="overflow-y: auto; height:500px;">
                @for (t of todos(); track t.id) {
                  <todo-item [todo]="t" />
                }
              </div>

              <div class="mt-3 p-2 d-flex justify-content-between">
                <button class="btn btn-success" (click)="markAllAsDone()" [disabled]="(totalDone() >= todos().length)">Mark All</button>
                <button class="btn btn-danger"  (click)="unMarkAll()" [disabled]="(totalDone() < 1)">UnMark All</button>
              </div>
            } @else {
              <div
                style="height: 400px;"
                class="d-flex flex-column justify-content-center align-items-center">
                <h3 class="text-muted opacity-50">No Todos</h3>
                <add-todo />
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
  markAllAsDone() {
    this.store.markAllAsDone();
    console.log("Mark All todos as DONE!",this.store.todos());
  }
  unMarkAll() {
    this.store.unMarkAll();
    console.log("Mark All todos as DONE!",this.store.todos());
  }
  refresh() {
    this.store.getNewTodos(); console.log("Refresh Todo List");
  }

}
