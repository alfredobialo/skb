import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit, Optional, signal,
  Signal
} from "@angular/core";
import {TodoItemComponent} from "./todo-item.component";
import {TodoItemModel} from "./model/TodoItemModel";
import {ApiSignalTodoStore} from "./state/todoSignalStore";
import {AddTodoComponent} from "./add-todo.component";
import {ToastModule} from "primeng/toast";
import {DialogService, DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  selector: "ea-Todos",
  imports: [
    TodoItemComponent,
    AddTodoComponent,
    ToastModule
  ],
  template: `
    <div class="todos  d-flex flex-column" [class]="{'shadow': !fromDialog }" >
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
              <ea-AddTodo [(defText)]="defTodoText" (onTodoAdded)="notifyTodoAdded($event)"/>
              <div class=" p-2" style="overflow-y: auto; height:500px;">
                @for (t of todos(); track t.id) {
                  <ea-TodoItem [todo]="t" />
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
                <ea-AddTodo  [(defText)]="defTodoText" />
              </div>

            }
          }

        </div>
        <div>
      </div>
    </div>

  `
})
export class TodosComponent implements OnInit {

  private store = inject(ApiSignalTodoStore);
  todosResponse = this.store.response;
  criteria = this.store.criteria;
  todos: Signal<TodoItemModel[]> = this.store.todos;
  loading = this.store.loading;
  totalDone = this.store.totalDone;

  defTodoText = signal("Hello World");
  fromDialog = false;

  constructor(@Optional() private dialogConfig: DynamicDialogConfig, @Optional() private dialogRef: DynamicDialogRef) {
  }

  ngOnInit() {
    if (this.dialogConfig) {
      this.defTodoText.set(this.dialogConfig.data.defaultTodo);
      this.fromDialog = this.dialogConfig.data.fromDialog;
    }

    console.log("Todo Dialog Init:=> ", this.defTodoText, "From Dialog => ", this.fromDialog);
  }

  markOrUnMarkTodo(t: TodoItemModel) {
    this.store.markTodo(t);
  }

  markAllAsDone() {
    this.store.markAllAsDone();
    console.log("Mark All todos as DONE!", this.store.todos());
  }

  unMarkAll() {
    this.store.unMarkAll();
    console.log("Mark All todos as DONE!", this.store.todos());
  }

  refresh() {
    this.store.getNewTodos();
    console.log("Refresh Todo List");
  }

  notifyTodoAdded(data: TodoItemModel) {
    console.log("Todo Added Event", data);
  }
}
