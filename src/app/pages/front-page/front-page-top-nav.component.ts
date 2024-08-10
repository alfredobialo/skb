import { Component } from '@angular/core';
import {AppLogo} from "../../shared/components/app-logo";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'ea-front-page-top-nav',
  standalone: true,
  imports: [
    AppLogo,
    RouterLink,
    RouterLinkActive
  ],
  template: `
    <div class=" mb-4 bg-white shadow-sm d-flex justify-content-between align-items-center">
      <div class="container py-1 py-md-2 d-flex justify-content-center justify-content-md-between align-items-center">
        <ea-AppLogo cssWidthValue="6rem" routePath="/app/dashboard/todos" class="d-none d-sm-none d-md-block" />
        <div class="nav-menus">
          <div class="list-inline d-flex justify-content-evenly align-items-center">
            <a routerLink="/" routerLinkActive="active-menu" [routerLinkActiveOptions]="{exact : true}">Home</a>
            <a routerLink="about" routerLinkActive="active-menu" [routerLinkActiveOptions]="{exact : true}">About</a>
            <a routerLink="faq" routerLinkActive="active-menu" [routerLinkActiveOptions]="{exact : true}">FAQ</a>
            <a routerLink="auth/login" routerLinkActive="active-menu" class="login-menu" [routerLinkActiveOptions]="{exact : true}">Login <span class="d-none d-md-inline"> | Register</span></a>
          </div>
        </div>
      </div>

    </div>
  `,
  styles: ``
})
export class FrontPageTopNavComponent {

}
