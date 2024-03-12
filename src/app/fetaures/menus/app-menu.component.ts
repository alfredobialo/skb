import {ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit} from '@angular/core';
import {AppMenuService} from "../../shared/services/app-menu.service";
import {ApiResponseData} from "../todos/model/TodoItemModel";
import {Subscription} from "rxjs";
import {JsonPipe} from "@angular/common";
import {AppFeatures} from "../../shared/models/AppMenu";

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
      <div class="p-3">
        <pre>
          {{menusResponse | json}}
        </pre>

        <button class="btn btn-primary" (click)="expandOrCollaspe()">@if(isExpanded) { Collapse } @else { Expand}</button>
      </div>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppMenuComponent implements OnInit, OnDestroy{
  private menuService = inject(AppMenuService);
  menusResponse!: ApiResponseData<AppFeatures>  ;
  private subscription!: Subscription;
  isExpanded = true;
  ngOnInit(){
    this.subscription = this.menuService.getAppMenus().subscribe({
      next : x => {
        console.log("APP MENU", x);
        this.menusResponse = x;
      }
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  expandOrCollaspe(){
    this.isExpanded != this.isExpanded;
  }
}
