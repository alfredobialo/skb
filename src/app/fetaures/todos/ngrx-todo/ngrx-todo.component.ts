import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TodoItemModel} from "../model/TodoItemModel";
import {Observable} from 'rxjs';
import {Store} from "@ngrx/store";
import {AsyncPipe} from "@angular/common";
import {addTodoAction, todoMarkedAction} from "../state/todo.actions";
import kebabCase from "lodash/kebabCase";
import identity from "lodash/identity";
import {getTodoSelector} from "../state/todo.selectors";
import { ITodoState} from "../state/todo.state";

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

  todos$: Observable<ITodoState>;

  constructor(private store: Store<{todo : ITodoState}>) {

    this.todos$ = store.select(getTodoSelector);
  }

  markAsDone(t: TodoItemModel) {
    this.store.dispatch(todoMarkedAction({todoId: t.id, isDone: !t.isDone}));
    console.log(t);

  }

  createTodo(todoInput: HTMLInputElement) {
    const todo = todoInput.value;

    this.store.dispatch(addTodoAction({
      todo: {
        isDone: false,
        id: kebabCase(todo+identity()),
        title: todo
      }
    }));

    todoInput.value="";
  }
}
