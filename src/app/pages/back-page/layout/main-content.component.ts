import { Component } from '@angular/core';
import {AppMenuComponent} from "../../../fetaures/menus/app-menu.component";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {TopNavComponent} from "./top-nav.component";

@Component({
  selector: 'ea-main-content',
  standalone: true,
  imports: [
    AppMenuComponent,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    TopNavComponent
  ],
  template: `
    <div class="h-100 position-relative main-area">
      <!--Top Nav section with Dashboard and user Profile-->
     <ea-top-nav />
      <!--End of Top Nav-->

      <!--Main Content Section-->
      <div class="d-flex ">
        <div class="sub-menu-section bg-white shadow align-content-stretch ">
          <div class="sub-menu-items">
            <!-- Begin Left Menu Sub menus Items-->
            <ul class="list-unstyled left-menu-sub-menus">
              <li><a  class="active" routerLinkActive="active" routerLink="todo"><i class="la la-file-alt"></i>Todos</a></li>
              <li><a  routerLinkActive="active" routerLink="counter"><i class="la la-clock"></i>Counter App</a></li>
              <li><a  routerLinkActive="active" routerLink="/auth/login"><i class="la la-user-lock"></i>Login Page</a></li>
            </ul>
            <!--End Of Left Sub Menu Items-->
          </div>
        </div>
        <div class="container main-section d-flex  flex-grow-1 flex-column  min-vh-100">
          <div class=" bg-primary-subtle py-4 px-5">
            <h3 class="fw-bold text-primary">Welcome, <span class="text-uppercase">Alfred Obialo</span></h3>
          </div>
          <!--Router Slot-->
          <div class="">
            <router-outlet> </router-outlet>
          </div>
          <!-- end of router Slot-->
          <div class="mb-4">
            <ea-app-menu />
          </div>
          <div class="footer mt-3 p-4 text-muted">
            <p>effectiv <sup>&trade;</sup> accounting &copy; 2024</p>
          </div>
        </div>
      </div>
      <!--  End Of Main Content Section-->

    </div>
  `,
  styles: ``
})
export class MainContentComponent {

}
