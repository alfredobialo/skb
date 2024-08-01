import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {TopNavComponent} from "./top-nav.component";
import {LeftNavSubMenuComponent} from "./left-nav-sub-menu.component";
@Component({
  selector: 'ea-main-content',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    TopNavComponent,
    LeftNavSubMenuComponent
  ],
  host : {
    class : "h-100 position-relative main-area"
  },
  template: `
         <!--Top Nav section with Dashboard and user Profile-->
     <ea-top-nav />
      <!--End of Top Nav-->

      <!--Main Content Section-->
      <div class="d-flex ">
        <ea-left-nav-sub-menu />
        <div class="container main-section d-flex  flex-grow-1 flex-column  min-vh-100">

          <!--Router Slot-->
          <div class="">
            <router-outlet> </router-outlet>
          </div>
          <!-- end of router Slot-->
          <div class="mb-4">

          </div>
        </div>
      </div>
      <!--  End Of Main Content Section-->
  `,
  styles: `
    :host {
      display: block;
    }
  `
})
export class MainContentComponent {

}
