import {ChangeDetectionStrategy, Component, VERSION} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {TodosComponent} from "./fetaures/todos/todos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TodosComponent],
  template: `
    <div class="container page-bg">
      <h1 class="text-muted opacity-50">{{ title }} <span style="font-size:1.1999rem; color: #062231 !important;">angular v{{ ngVer }}</span></h1>
      <hr>
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
}
