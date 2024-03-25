import {Component, inject} from '@angular/core';
import {ROUTER_CONFIGURATION, ROUTER_INITIALIZER, ROUTES} from "@angular/router";

@Component({
  selector: 'ea-dashboard',
  standalone: true,
  imports: [],
  template: `
    <p>
      dashboard works!
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
