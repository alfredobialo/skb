import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ea-app-submenu',
  standalone: true,
  imports: [],
  template: `
    <p>
      app-submenu works!
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppSubmenuComponent {

}
