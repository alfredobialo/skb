import {Component, input} from '@angular/core';
import {transition} from "@angular/animations";

@Component({
  standalone:true,
  selector: 'ea-AppLogo, [ea-AppLogo]',
  template: `
    <img src="/assets/images/logo/effectiv-icon-up_logo_dark.png"
                    [style.width]="cssWidthValue() +' !important'"
                   alt="effectiv Accounting">
  `,
  host :{
    class : "d-flex justify-content-center align-items-center"
  }
})

export class AppLogo{
  cssWidthValue = input("50%");
}
