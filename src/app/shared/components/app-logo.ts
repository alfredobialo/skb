import {Component, input} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  standalone: true,
  selector: 'ea-AppLogo, [ea-AppLogo]',
  template: `
    <img src="/assets/images/logo/effectiv-icon-up_logo_dark.png"
         [style.width]="cssWidthValue() +' !important'"
         alt="effectiv Accounting" [routerLink]="routePath()" class="">
  `,
  imports: [
    RouterLink
  ],
  host: {
    class: "d-flex justify-content-center align-items-center"
  },
  styles : `
    img {
      cursor : pointer;
    }
  `
})

export class AppLogo{
  cssWidthValue = input("50%");
  routePath  = input("");
}
