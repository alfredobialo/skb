import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {TodosComponent} from "./fetaures/todos/todos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TodosComponent],
  template: `
    <div class="container">
      <h1>{{title}}</h1>
      <hr>
      <div class="todo-container d-flex  justify-content-center align-items-center">
           <todos />
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'Todos App';
}
