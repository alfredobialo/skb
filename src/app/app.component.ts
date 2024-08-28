import {Component,  OnInit, VERSION} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet, UrlSegment} from '@angular/router';



@Component({
  selector: 'ea-app',
  standalone: true,
  imports: [CommonModule, RouterOutlet,  RouterLink, RouterLinkActive],
  template: `
        <router-outlet>

        </router-outlet>
  `,
styles : `
    :host {
      display : block;
    }
`
})
export class AppComponent implements OnInit{
  title = 'Todos App';
  ngVer = VERSION.full;
  constructor(private activatedRoute : ActivatedRoute, private  router: Router) {

  }

  ngOnInit(): void {


    }

}
