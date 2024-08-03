import {Component, OnInit, VERSION} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {ToastModule} from "primeng/toast";
import {PrimeNGConfig} from "primeng/api";
import {MainContentComponent} from "./layout/main-content.component";
import {LeftNavComponent} from "./layout/left-nav.component";

@Component({
  imports: [CommonModule,  RouterOutlet, ToastModule, RouterLink, RouterLinkActive,  MainContentComponent, LeftNavComponent],
  standalone:true,
  selector: 'base-layout',
  template: `
    <div class="grid-container ">
      <!--Left Nav-->
      <ea-left-nav> {{frameworkVersion}}</ea-left-nav>
      <!--End Of Left Nav-->

      <!--Main Area-->
     <ea-main-content />
      <!-- End Of Main Area-->
      <p-toast id="id"></p-toast>
    </div>

  `
})

export class BaseLayout implements OnInit {
  frameworkVersion = `Angular v${VERSION.full}`
  constructor(private primengConfig : PrimeNGConfig) {
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

}
