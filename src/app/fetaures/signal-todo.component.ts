import {ChangeDetectionStrategy, Component, inject, Signal} from '@angular/core';
import {ApiSignalTodoStore} from "./todos/state/todoSignalStore";
import {TodoItemModel} from "./todos/model/TodoItemModel";
import {NgClass} from "@angular/common";


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  selector: 'signal-todo-component',
  imports: [
    NgClass
  ],
  template: `
    <div class="p-4 m-2 border border-1">
      <p class="lead">Todo Signal Component</p>
      <hr>
      <h3> Loading :  {{ loading() }} Total done: {{ totalDone() }}</h3>
      <div class="p-2 border-1 border">
        @for (t of todos(); track t.id) {
          <p class="lead  p-3 mb-2 border-1 shadow bg-white"
             [ngClass]="{'text-success fw-bold':t.isDone}"
             (dblclick)="markOrUnMarkTodo(t)">{{ t.title }}</p>
        }
      </div>
    </div>
  `
})

export class SignalTodoComponent {

//todos  =  signal<PagedApiResponse<TodoItemModel[]>>( {data : []});

  private store = inject(ApiSignalTodoStore);

  todosResponse = this.store.response;
  criteria = this.store.criteria;
  todos:Signal<TodoItemModel[]> = this.store.todos;
  loading = this.store.loading;
  totalDone = this.store.totalDone;

  markOrUnMarkTodo(t: TodoItemModel) {
    this.store.markTodo(t);
  }
}
