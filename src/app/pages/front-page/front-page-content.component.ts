import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'ea-front-page-content',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  template: `
    <div class="page-content bg-white  ">
      <div class="container d-flex my-2 my-md-4 flex-column justify-content-center align-items-center rounded-3" style="height:130px; background-color: #faf7f7;
       border:5px dotted #c6cbc6;">
        <h1>Ads Section</h1>
        <p class="lead text-muted">Place your ads for FREE!</p>
      </div>
      <div class="container p-3 p-md-5">
        <router-outlet>

        </router-outlet>
      </div>

    </div>
  `,
  styles: ``
})
export class FrontPageContentComponent {

}
