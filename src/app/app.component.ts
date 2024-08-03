import {Component,  OnInit, VERSION} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';



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
  constructor(private activatedRoute : ActivatedRoute) {

  }

  ngOnInit(): void {
   /* this.activatedRoute.title.subscribe(
      {next : x => this.title = x ?? "Demo App"});*/
    this.title = this.activatedRoute.snapshot.title ?? "App"
    console.log(this.activatedRoute.snapshot);
    }

}
