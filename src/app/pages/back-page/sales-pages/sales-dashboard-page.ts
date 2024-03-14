import {Component, OnInit} from '@angular/core';

@Component({
  standalone:true,
  selector: 'ea-sales-dashboard-page',
  template: `
    <div class="p-4 bg-white">
      <h2>Sales Dashboard Page</h2>
    </div>
  `
})

export class SalesDashboardPage implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
