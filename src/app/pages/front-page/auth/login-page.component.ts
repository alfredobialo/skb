import { Component } from '@angular/core';
import {LoginComponent} from "../../../fetaures/auth/login.component";

@Component({
  selector: 'ea-login-page',
  standalone: true,
  imports: [
    LoginComponent
  ],
  template: `
    <div class="p-lg-4 p-md-4 p-3">
      <ea-login />
    </div>
  `,
  styles: ``
})
export class LoginPageComponent {

}
