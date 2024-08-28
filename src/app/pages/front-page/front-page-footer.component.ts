import { Component } from '@angular/core';
import {CopyrightComponent} from "../copyright.component";

@Component({
  selector: 'ea-front-page-footer',
  standalone: true,
  imports: [
    CopyrightComponent
  ],
  template: `
    <div class="footer" >
      <div class="container">
        <div class="my-5">
          <ea-copyright />
        </div>
      </div>
    </div>
  `,
  styles: ``
})
export class FrontPageFooterComponent {

}
