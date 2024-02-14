import {ChangeDetectionStrategy, Component, inject, VERSION} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {TodosComponent} from "./fetaures/todos/todos.component";
import {ApiSignalTodoStore} from "./fetaures/todos/state/todoSignalStore";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TodosComponent],
  template: `
    <div class="container page-bg">
      <div class="mb-2 d-flex p-2 bg-white shadow-sm justify-content-between align-items-center">
        <h1 class="text-muted opacity-50">{{ title }} <span
          style="font-size:1.1999rem; color: #062231 !important;">angular v{{ ngVer }}</span></h1>
        <span style="font-size : 2rem; color : #638d6b">Todo report :{{ report() }}</span>

      </div>
      <div class="todo-container d-flex  justify-content-center align-items-center">
        <todos />
      </div>
      <router-outlet></router-outlet>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent {
  title = 'Todos App';
  ngVer = VERSION.full;
  private store = inject(ApiSignalTodoStore);
  report = this.store.todoReport;
}
