import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'ea-left-nav-sub-menu',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  host:{
    class : "sub-menu-section bg-white shadow align-content-stretch"
  },
  template: `
    <div class="sub-menu-items">
      <!-- Begin Left Menu Sub menus Items-->
      <ul class="list-unstyled left-menu-sub-menus">
        <li><a class="active" routerLinkActive="active" routerLink="/dashboard/todos"><i class="la la-file-alt"></i>Todos</a></li>
        <li><a routerLinkActive="active" routerLink="dashboard/counter"><i class="la la-clock"></i>Counter App</a></li>
        <li><a routerLinkActive="active" routerLink="dashboard/login"><i class="la la-user-lock"></i>Login Page</a></li>
      </ul>
      <!--End Of Left Sub Menu Items-->
    </div>

  `,
  styles: ``
})
export class LeftNavSubMenuComponent {

}
