import { Component } from '@angular/core';
import {CopyrightComponent} from "../../copyright.component";

@Component({
  selector: 'ea-footer',
  standalone: true,
  imports: [
    CopyrightComponent
  ],
  template: `
    <div class="footer mt-3  text-muted">
        <ea-copyright />
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `
})
export class FooterComponent {

}
