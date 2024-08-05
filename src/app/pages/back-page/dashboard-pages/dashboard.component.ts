import {Component, inject} from '@angular/core';
import {ROUTER_CONFIGURATION, ROUTER_INITIALIZER, RouterOutlet, ROUTES} from "@angular/router";
import {AppMenuComponent} from "../../../fetaures/menus/app-menu.component";

@Component({
  selector: 'ea-dashboard',
  standalone: true,
  imports: [
    RouterOutlet,
    AppMenuComponent
  ],
  template: `
    <div class=" py-4 px-5" style="background-color : #e5f4fd;
     color : #345e77">
      <h3 class="fw-bold">Welcome, <span class="text-uppercase ">Alfred Obialo</span></h3>
    </div>
    <ea-app-menu />
  `,
  styles: ``
})
export class DashboardComponent {
  routes  = inject(ROUTES)

  ngOnInit(){
    console.log("Routes => "  , this.routes);
  }
}
