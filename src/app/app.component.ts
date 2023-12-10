import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {TodosComponent} from "./fetaures/todos/todos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TodosComponent],
  template: `
    <div class="container page-bg">
      <h1 class="text-muted opacity-50">{{title}}</h1>
      <hr>
      <div class="todo-container d-flex  justify-content-center align-items-center">
           <todos />
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent {
  title = 'Todos App';
}
