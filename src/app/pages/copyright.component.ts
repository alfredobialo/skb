import { Component } from '@angular/core';

@Component({
  selector: 'ea-copyright',
  standalone: true,
  imports: [],
  template: `
    <p>effectiv <sup>&trade;</sup> accounting &copy; {{ year }}</p>
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
