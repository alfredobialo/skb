import {Component, ViewEncapsulation} from '@angular/core';
import {AppLogo} from "../../shared/components/app-logo";
import {CopyrightComponent} from "../copyright.component";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {FrontPageTopNavComponent} from "./front-page-top-nav.component";
import {FrontPageFooterComponent} from "./front-page-footer.component";
import {FrontPageContentComponent} from "./front-page-content.component";

@Component({
  encapsulation : ViewEncapsulation.None,
  selector: 'ea-front-page-layout',
  standalone: true,
  imports: [
    AppLogo,
    CopyrightComponent,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    FrontPageTopNavComponent,
    FrontPageFooterComponent,
    FrontPageContentComponent
  ],
  template: `
    <div>
      <!--Top Nav Starts HERE-->
      <ea-front-page-top-nav />
      <!--Top Nav End HERE-->

      <!--Content Section-->
     <ea-front-page-content />
      <!--END  Content Section -->

      <!-- footer section-->
     <ea-front-page-footer />
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
