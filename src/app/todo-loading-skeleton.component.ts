import { Component } from '@angular/core';
import {PrimeNgSkeleton} from "./shared/primeng-component-import";

@Component({
  selector: 'ea-todo-loading-skeleton',
  standalone: true,
  imports: [PrimeNgSkeleton],
  template: `
    <div class="mb-3 d-flex ">
      <p-skeleton width="390px" styleClass="me-3 p-1"  height="40px"></p-skeleton>
      <p-skeleton width="80px"  height="40px" styleClass="mx-0 mb-2 p-1"></p-skeleton>
    </div>
    @for( i of [1,2,3,4,5,6]; track i){
      <div class="my-3   d-flex justify-content-between align-items-center">
        <div class="d-flex">
          <p-skeleton width="40px" shape="rounded" height="40px" styleClass="mx-0 mb-3 p-1"></p-skeleton>
          <p-skeleton width="370px" shape="rounded" height="40px" styleClass="mx-3 mb-3 p-1"></p-skeleton>
        </div>
        <p-skeleton width="3rem" shape="square" height="40px" styleClass="mx-0 mb-3 p-1"></p-skeleton>
      </div>
    }

  `,
  styles: ``
})
export class TodoLoadingSkeletonComponent {

}
