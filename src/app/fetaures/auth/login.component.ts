import {Component, ElementRef,effect,  viewChild} from '@angular/core';
import {PrimeNgButtonComponents, PrimeNgInputComponents} from "../../shared/primeng-component-import";
import {PasswordModule} from "primeng/password";
import {AppLogo} from "../../shared/components/app-logo";
import {ReactiveFormsModule,FormGroup,  FormControl, FormRecord, Validators} from "@angular/forms";
import {JsonPipe} from "@angular/common";
@Component({
  host: {
    "class" : " my-host-added",
   /* "(click)" : "youClickedMe()"*/
  },
  selector: 'ea-login,[eaLogin],[ea-login]',
  standalone: true,
  imports: [PrimeNgInputComponents, PrimeNgButtonComponents, PasswordModule, AppLogo, ReactiveFormsModule, JsonPipe],
  template: `
    <ng-container>
      <div class="login-panel d-flex justify-content-between align-items-stretch">
        <div class="flex-grow-1 w-100 flex-column  d-flex justify-content-center align-items-center">
          <ea-AppLogo cssWidthValue="50%" routePath="/app/dashboard/todos"/>

          <div class="p-3 mt-2 text-black">
            <pre>{{frm.value |json}}</pre>
          </div>

        </div>
        <div class="login-ui-section p-3 flex-grow-1 w-100 flex-column d-flex justify-content-center">
          <div style="width: 350px; margin-left:5rem; " >
            <h2 class="playwrite-pe-400">Login</h2>
            <span>I'm a professional</span>

            <div class="mt-2">
              <form novalidate role="form" name="loginForm" [formGroup]="loginFrmUi" #frm="ngForm">
                <div class=" d-flex flex-column" >
                  <input type="text" placeholder="Email Address"formControlName="userEmail" #txtEmail pInputText name="txtEmail"  class="mb-4"  />
                  <p-password name="txtPwd" placeholder="Password" formControlName="password"
                              [toggleMask]="true"
                              [feedback]="false"
                              variant="filled"
                              [label]="'Password'" class="mb-3 " [style.width]="'100%'"/>
                  <div class="mt-2">
                    <label for="chkRemember" class="form-label">Remember me Next Time &nbsp; &nbsp;
                    <input type="checkbox" class="form-check-input form-check-inline" name="chkRem" formControlName="rememberMe"></label>
                  </div>

                  <div class="mt-3">
                    <button class="btn btn-dark btn-lg">Login <i class="las la-lock ms-3"></i></button>
                  </div>
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
      font-family: "Segoe UI Symbol", sans-serif;
      height: 50rem;
      color: white;
    }

    div.p-password.p-component.p-inputwrapper {
      width: 100%;
      background-color: #faf8f8;
    }

    div.login-ui-section {
      background-color: var(--login-primary-bg-color);
    }
  `]
})
export class LoginComponent {

  txtTemp  = viewChild.required<ElementRef<HTMLInputElement>>("txtEmail");
  youClickedMe (){

    const elem = this.txtTemp().nativeElement;
    elem.value = "Hello world";
    console.log(this.txtTemp()?.nativeElement)
  }

  loginFrmUi =  new FormGroup( {
    userEmail : new FormControl("alfredobialo@gmail.com", [Validators.required, Validators.email]),
    password : new FormControl("loginPassword", Validators.required),
    rememberMe : new FormControl(false),
  })


}
