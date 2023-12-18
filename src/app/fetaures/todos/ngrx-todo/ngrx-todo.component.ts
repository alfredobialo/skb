import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TodoItemModel} from "../model/TodoItemModel";
import {Observable} from 'rxjs';
import {Store} from "@ngrx/store";
import {AsyncPipe} from "@angular/common";
import {addTodoAction, todoMarkedAction} from "../state/todo.actions";
import {kebabCase} from "lodash";
import {getTodoSelector} from "../state/todo.selectors";
import {IAppState} from "../state/todo.state";

@Component({
  selector: 'app-ngrx-todo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './ngrx-todo.component.html',
  styleUrl: './ngrx-todo.component.css'
})
export class NgrxTodoComponent {

  todos$: Observable<TodoItemModel[]>;

  constructor(private store: Store<{todos : IAppState}>) {

    this.todos$ = store.select(getTodoSelector);
  }

  markAsDone(t: TodoItemModel) {
    this.store.dispatch(todoMarkedAction({todoId: t.id, isDone: !t.isDone}));
    console.log(t);
    this.store.dispatch(addTodoAction({
      todo: {
        isDone: false,
        id: kebabCase("New Todo Added " + new Date()),
        title: "New Todo Added " + new Date()
      }
    }));
  }
}
