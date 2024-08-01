import { Component } from '@angular/core';
import {AppLogo} from "../../../shared/components/app-logo";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {FooterComponent} from "./footer.component";

@Component({
  selector: 'ea-left-nav',
  standalone: true,
  imports: [
    AppLogo,
    RouterLink,
    RouterLinkActive,
    FooterComponent
  ],
  host : {
    class:"p-4 text-dark   left-nav"
  },
  template: `
    <div class="left-nav-sticky">
      <div class="text-center mb-5 mb-sm-3">
        <ea-AppLogo />
      </div>
      <div class="d-flex flex-column menu-list-container">
        <ul class="list-unstyled  menu-list">
          <li class=""><a href="" routerLinkActive="active" routerLink="/dashboard"><i class="la la-dashboard la-2x"></i>Dashboard</a></li>
          <li><a href="" class="" routerLinkActive="active" routerLink="/sales"><i class="la la-shopping-cart la-2x"></i>Sales</a></li>
          <li><a href="" class=""><i class="la la-dollar-sign la-2x"></i>Purchases</a></li>
          <li><a href="" class=""><i class="la la-warehouse la-2x"></i>Inventory</a></li>
          <li><a href="" class=""><i class="la la-users la-2x"></i>Customers</a></li>
          <li><a href="" class=""><i class="la la-coins la-2x"></i>Financial</a></li>
          <li><a href="" class=""><i class="la la-gear la-2x"></i>Settings</a></li>
          <li><a href="" class=""><i class="lab la-youtube text-danger la-2x"></i>Training</a></li>

        </ul>
      </div>
      <div class="mt-5 ">
        <a href="" class="p-3 fw-bold d-flex  justify-content-start align-items-center text-decoration-none text-danger"><i
          class="me-3 las la-sign-out-alt la-2x"></i>Logout</a>
      </div>
      <div class="text-center">
        <p class="text-muted" style="font-size: 0.95rem;">Built with :
          <ng-content></ng-content>
        </p>
        <ea-footer  />
      </div>

    </div>

  `,
  styles: ``
})
export class LeftNavComponent {

}
