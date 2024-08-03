import { Component } from '@angular/core';

@Component({
  selector: 'ea-home-page',
  standalone: true,
  imports: [],
  host :{
    class : "d-flex justify-content-center align-items-center content-height"
  },
  template: `
    <div class="checking-home-page">
      <h1 class="text-muted">Home page Dynamically created Content goes here!</h1>
    </div>
  `,
  styles: ``
})
export class HomePageComponent {

}
