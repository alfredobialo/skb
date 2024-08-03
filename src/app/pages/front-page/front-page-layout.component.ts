import { Component } from '@angular/core';
import {AppLogo} from "../../shared/components/app-logo";
import {CopyrightComponent} from "../copyright.component";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
  selector: 'ea-front-page-layout',
  standalone: true,
  imports: [
    AppLogo,
    CopyrightComponent,
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  template: `
    <div>
      <!--Top Nav Starts HERE-->
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
      <!--Top Nav End HERE-->

      <!--Content Section-->
      <div class="page-content bg-white  ">
        <div class="container p-3 p-md-5">
            <router-outlet>

            </router-outlet>
        </div>

      </div>
      <!--END  Content Section -->

      <!-- footer section-->
      <div class="footer" >
            <div class="container">
                <div class="my-5">
                  <ea-copyright />
                </div>
            </div>
      </div>
      <!-- END of footer section-->

    </div>

  `,
  styles: [`
    div.page-content .container, div.page-content .content-height {
      min-height: 400px;
    }

    div.footer {
      min-height: 300px;
    }

    div.nav-menus a {
      text-decoration: none;
      padding: 0.588rem 1.16rem;
      transition: all 300ms linear;
      color: #604894;
      border-radius: 22px;
    }

    div.nav-menus a.login-menu {
      background-color: var(--login-primary-bg-color);
      color: #fff;
    }

    div.nav-menus a:hover, div.nav-menus a:focus, div.nav-menus a.active-menu {
      background-color: #e9f1f5;
      color: #5e6089;
      font-weight: 600;

    }

    div.nav-menus a.active-menu {
      /*outline: 2px #ef7bce solid;*/
      margin: 2px;
    }
  `]
})
export class FrontPageLayoutComponent {

}
