import { Component } from '@angular/core';

@Component({
  selector: 'ea-copyright',
  standalone: true,
  imports: [],
  template: `
    <p>effectiv <sup>&trade;</sup> accounting &copy; {{ year }}</p>
    <span><i class="las la-phone "></i> &nbsp; Call: 0806 927 3479 </span>
  `,
  styles: `
    :host {
      display: block;
    }
  `
})
export class CopyrightComponent {
    year : number = new Date().getFullYear();
}
