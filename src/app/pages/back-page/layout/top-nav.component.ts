import { Component } from '@angular/core';
import {CurrentUserComponent} from "../../../fetaures/auth/current-user.component";

@Component({
  selector: 'ea-top-nav',
  standalone: true,
  imports: [
    CurrentUserComponent
  ],
  host :{
    class: "top-nav  shadow-sm px-3 d-flex justify-content-between align-items-center"
  },
  template: `

      <div class="flex-fill d-flex justify-content-between align-items-center top-nav-header">
        <span class="lead fw-bold">Dashboard</span>
        <!-- Current Logged In User section-->
        <ea-current-user/>
      </div>

  `,
  styles: ``
})
export class TopNavComponent {

}
