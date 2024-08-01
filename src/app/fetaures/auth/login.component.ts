import {Component, ElementRef,  viewChild} from '@angular/core';
import {PrimeNgButtonComponents, PrimeNgInputComponents} from "../../shared/primeng-component-import";
import {PasswordModule} from "primeng/password";
import {AppLogo} from "../../shared/components/app-logo";

@Component({
  host: {
    "class" : " my-host-added",
    "(click)" : "youClickedMe()"
  },
  selector: 'ea-login,[eaLogin],[ea-login]',
  standalone: true,
  imports: [PrimeNgInputComponents, PrimeNgButtonComponents, PasswordModule, AppLogo],
  template: `
    <ng-container>
      <div class="login-panel d-flex justify-content-between align-items-stretch">
        <div class="flex-grow-1 w-100 flex-column  d-flex justify-content-center align-items-center">
          <ea-AppLogo cssWidthValue="70%"/>

        </div>
        <div class="login-ui-section p-3 flex-grow-1 w-100 flex-column d-flex justify-content-center">
          <div style="width: 350px; margin-left:5rem; " >
            <h2 class="playwrite-pe-400">Login</h2>
            <span>I'm a professional</span>

            <div class="mt-2">
              <form novalidate role="form" name="loginForm">
                <div class=" d-flex flex-column" >
                  <input type="text" placeholder="Email Address" #txtEmail pInputText name="txtEmail"  class="mb-4"  />
                  <p-password name="txtPwd" placeholder="Password"
                              [toggleMask]="true"
                              [feedback]="false"
                              variant="filled"
                              [label]="'Password'" class="mb-3 " [style.width]="'100%'"/>
                </div>
              </form>
            </div>
          </div>


        </div>
      </div>
    </ng-container>

  `,
  styles: [`
        div.login-panel {
      border-radius: 30px;
      border: 8px var(--login-primary-bg-color) solid;
      border-left: 3px var(--login-primary-bg-color) solid;
      font-family:"Segoe UI Symbol" ;
      height : 50rem;
      color:white;
    }
        div.p-password.p-component.p-inputwrapper{
          width:100%;
          background-color:#333;
        }

        div.login-ui-section{
          background-color : var(--login-primary-bg-color);
        }
  `]
})
export class LoginComponent {

  txtTemp  = viewChild<ElementRef<HTMLInputElement>>("txtEmail");
  youClickedMe (){

    //this.txtTemp()
    console.log(this.txtTemp()?.nativeElement)
  }
}
