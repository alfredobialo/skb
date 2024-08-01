import { Component } from '@angular/core';

@Component({
  selector: 'ea-current-user',
  standalone: true,
  imports: [],
  template: `
    <div class="d-flex justify-content-between align-items-center">
      <div class="d-flex flex-column justify-content-center " style="font-size: 0.89rem;">
        <small class="text-uppercase text-end ">Alfred Obialo</small>
        <small class=" text-end text-primary">alfredcsdinc&#64;gmail.com</small>
      </div>
      <div class="ms-3 d-flex p-2 border-1 border text-uppercase text-white justify-content-center align-items-center"
           style="width:40px; height:40px; border-radius: 50%;
                  font-size:1.1rem; font-weight: bold; background-color: #565555;">
        AO
      </div>
    </div>
  `,
  styles: ``
})
export class CurrentUserComponent {

}
