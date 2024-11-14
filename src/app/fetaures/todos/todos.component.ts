import {
  ChangeDetectionStrategy,
  Component,
  inject, effect,
  OnInit, Optional, signal,
  Signal, viewChildren
} from "@angular/core";
import {TodoItemComponent} from "./todo-item.component";
import {TodoItemModel} from "./model/TodoItemModel";
import {ApiSignalTodoStore} from "./state/todoSignalStore";
import {AddTodoComponent} from "./add-todo.component";
import {ToastModule} from "primeng/toast";
import {DialogService, DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {TodoLoadingSkeletonComponent} from "./todo-loading-skeleton.component";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  selector: "ea-Todos",
  imports: [
    TodoItemComponent,
    AddTodoComponent,
    ToastModule,
    TodoLoadingSkeletonComponent
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

            @if (todos().length > 0) {
              <ea-AddTodo [(defText)]="defTodoText" (onTodoAdded)="notifyTodoAdded($event)"/>
              @if (loading()) {
                <ea-todo-loading-skeleton />
              } @else {
                <div class=" p-2" style="overflow-y: auto; height:500px;">
                @for (t of todos(); track t.id) {
                  <ea-TodoItem [todo]="t" #tItem (onStartEditing)="handleStartEditingTodo($event)" />
                }
              </div>
              }
              <div>
                Pagination Demo:
                <button class="btn btn-link" (click)="store.setCurrentPage(1)">1</button>
                <button class="btn btn-link" (click)="store.setCurrentPage(2)">2</button>
              </div>

              <div class="mt-3 p-2 d-flex justify-content-between">
                <button class="btn btn-success" (click)="markAllAsDone()" [disabled]="(totalDone() >= todos().length || processing())">Mark All</button>
                <button class="btn btn-danger"  (click)="unMarkAll()" [disabled]="(totalDone() < 1 || processing())">UnMark All</button>
              </div>
            } @else {
              <div
                style="height: 400px;"
                class="d-flex flex-column justify-content-center align-items-center">
                <h3 class="text-muted opacity-50">No Todos</h3>
                <ea-AddTodo  [(defText)]="defTodoText" />
              </div>

            }


        </div>
        <div>
      </div>
    </div>

  `,
  animations : []

})
export class TodosComponent implements OnInit {

  protected store = inject(ApiSignalTodoStore);
  todosResponse = this.store.response;
  criteria = this.store.criteria;
  todos: Signal<TodoItemModel[]> = this.store.todos;
  loading = this.store.loading;
  processing = this.store.processing;
  totalDone = this.store.totalDone;
  allTodoItemComponent  = viewChildren(TodoItemComponent);

  defTodoText = signal("");
  fromDialog = false;
  private  editedTodoId = signal("");
  constructor(@Optional() private dialogConfig: DynamicDialogConfig, @Optional() private dialogRef: DynamicDialogRef) {
    effect(() => {
      if(this.allTodoItemComponent && this.allTodoItemComponent().length > 0 && this.editedTodoId() !== ""){
        // loop through all todoItem Component and ensure edit mode is turned off except for the selected
        for (let i = 0 ; i<this.allTodoItemComponent().length; i++) {
          if(this.allTodoItemComponent()[i].todo().id !== this.editedTodoId()){
            this.allTodoItemComponent()[i].cancelEditing();
          }

        }
      }

    }, {allowSignalWrites : true});
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

  handleStartEditingTodo(todo: TodoItemModel) {
    this.editedTodoId.set(todo.id);

  }
}
