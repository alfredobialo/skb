import {Component, input} from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'ea-front-page-content',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  template: `
    <div class="page-content bg-white ">
      @if(showAds()){
        <div class="">
          <div class=" ads d-flex my-2 my-md-4 flex-column justify-content-center align-items-center rounded-3" >
            <h1>Ads Section</h1>
            <p class="lead text-muted">Place your ads for FREE!</p>
          </div>
        </div>
      }
      <div class="container p-3 p-md-5">
        <router-outlet>

        </router-outlet>
      </div>

    </div>
  `,
  styles: `
    div.ads {
      margin-top: 40px;
      height: 270px;
      background-color: #fdfafa;
      border: 5px dotted #c6cbc6;
    }`
})
export class FrontPageContentComponent {
  showAds = input(true);
}
