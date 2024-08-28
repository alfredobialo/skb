import {ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit} from '@angular/core';
import {AppMenuService} from "../../shared/services/app-menu.service";
import {ApiResponseData} from "../todos/model/TodoItemModel";
import {Subscription} from "rxjs";
import {JsonPipe} from "@angular/common";
import {AppFeatures} from "../../shared/models/AppMenu";
import {MenuStore} from "./menuStore";

@Component({
  selector: 'ea-app-menu, ea-AppMenu',
  standalone: true,
  imports: [
    JsonPipe
  ],
  template: `

    <p class="lead text-muted">From Menu Store</p>
    <pre>
      {{ mStore() | json }}
    </pre>


    <div class="p-5 bg-white  rounded-4">
      <p class="lead mb-3">App Menu Structure</p>
      <div class="p-3 " [class]="{'bg-light shadow' : !isExpanded}">
        @if (isExpanded) {
          <pre>
            {{ menusResponse | json }}
          </pre>
        }

        <button class="btn btn-primary" (click)="expandOrCollaspe()">@if (isExpanded) {
          Collapse
        } @else {
          Expand
        }</button>
      </div>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppMenuComponent implements OnInit, OnDestroy{
  private menuStore = inject(AppMenuService);
  protected mStore = inject(MenuStore).getAppMenu();

  menusResponse! : ApiResponseData<AppFeatures> ;
  isExpanded = true;
  private subscription!: Subscription;
  ngOnInit(){
   this.subscription = this.menuStore.getAppMenus()
     .subscribe( {
       next : value => {
         this.menusResponse = value;
       }
     });

  }

  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

  expandOrCollaspe(){
    this.isExpanded = !this.isExpanded;
  }
}
