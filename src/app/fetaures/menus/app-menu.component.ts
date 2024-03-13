import {ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit} from '@angular/core';
import {AppMenuService} from "../../shared/services/app-menu.service";
import {ApiResponseData} from "../todos/model/TodoItemModel";
import {Subscription} from "rxjs";
import {JsonPipe} from "@angular/common";
import {AppFeatures} from "../../shared/models/AppMenu";
import {MenuStore} from "./menuStore";

@Component({
  selector: 'ea-app-menu',
  standalone: true,
  imports: [
    JsonPipe
  ],
  template: `
    <p>
      app-menu works!
    </p>

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
