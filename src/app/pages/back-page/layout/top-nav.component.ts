import {Component, inject} from '@angular/core';
import {CurrentUserComponent} from "../../../fetaures/auth/current-user.component";
import { PrimeNgProgressBar } from '../../../shared/primeng-component-import';
import {ApiSignalTodoStore} from "../../../fetaures/todos/state/todoSignalStore";

@Component({
  selector: 'ea-top-nav',
  standalone: true,
  imports: [
    CurrentUserComponent,
    PrimeNgProgressBar
  ],
  host :{
    class: "top-nav  shadow-sm  d-flex flex-column justify-content-between pos-relative"
  },
  template: `
    <div class="d-flex px-3 mt-3 justify-content-between align-items-center">
      <div class="flex-fill d-flex justify-content-between align-items-center top-nav-header">
        <span class="lead fw-bold">Dashboard</span>
        <!-- Current Logged In User section-->
        <ea-current-user/>
      </div>
    </div>
    @if(todoProcessing()){
        <p-progressBar mode="indeterminate" [style]="{ height: '4px', backgroundColor : '#dde9ee' }" />
    }


  `,
  styles: ``
})
export class TopNavComponent {
protected todoProcessing  = inject(ApiSignalTodoStore).anyProcessing;
}
