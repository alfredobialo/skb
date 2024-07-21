import {Component, inject} from '@angular/core';
import {ROUTER_CONFIGURATION, ROUTER_INITIALIZER, RouterOutlet, ROUTES} from "@angular/router";

@Component({
  selector: 'ea-dashboard',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  template: `
    <p>
      dashboard works!
      <router-outlet >
        <p>Child route will be displayed here</p>
      </router-outlet>
    </p>
  `,
  styles: ``
})
export class DashboardComponent {
  routes  = inject(ROUTES)

  ngOnInit(){
    console.log("Routes => "  , this.routes);
  }
}
