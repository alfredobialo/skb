import {ChangeDetectionStrategy, Component, inject, OnInit, VERSION} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {TodosComponent} from "./fetaures/todos/todos.component";
import {ApiSignalTodoStore} from "./fetaures/todos/state/todoSignalStore";
import {ToastModule} from "primeng/toast";


@Component({
  selector: 'ea-app',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TodosComponent, RouterLink, RouterLinkActive,ToastModule],
  template: `
        <router-outlet>

        </router-outlet>
  `,
styles : `
    :host {
      display : block;
    }
`
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
