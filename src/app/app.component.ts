import {ChangeDetectionStrategy, Component, inject, OnInit, VERSION} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {TodosComponent} from "./fetaures/todos/todos.component";
import {ApiSignalTodoStore} from "./fetaures/todos/state/todoSignalStore";
import {ToastModule} from "primeng/toast";


@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TodosComponent, RouterLink, RouterLinkActive,ToastModule],
  template: `
    <div class="container page-bg">
      <div class="mb-2 d-flex p-2 bg-white shadow-sm justify-content-between align-items-center">
        <h1 class="text-muted opacity-50">{{ title }} <span
          style="font-size:1.1999rem; color: #062231 !important;">angular v{{ ngVer }}</span></h1>
        <div class="p-2">
          <a routerLink="/todo" [routerLinkActive]="'fw-bold'" class="btn-link me-2">Todo App</a>
          <a routerLink="/counter" [routerLinkActive]="'fw-bold'" class="btn-link me-2">Counter App</a>
          <a href="#" class="btn-link me-2">About Me</a>
          <span style="font-size : 0.88rem; color : #2a923e; font-weight:600;">Todo report :{{ report() }}</span>
        </div>


      </div>
      <div class="todo-container d-flex  justify-content-center align-items-center">
        <router-outlet>

        </router-outlet>
      </div>
    <p-toast key="id" ></p-toast>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent implements OnInit{
  title = 'Todos App';
  ngVer = VERSION.full;
  private store = inject(ApiSignalTodoStore);

  report = this.store.todoReport;
  constructor(private activatedRoute : ActivatedRoute) {

  }

  ngOnInit(): void {
   /* this.activatedRoute.title.subscribe(
      {next : x => this.title = x ?? "Demo App"});*/
    this.title = this.activatedRoute.snapshot.title ?? "App"
    console.log(this.activatedRoute.snapshot);
    }

}
