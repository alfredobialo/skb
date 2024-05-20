import {Component, OnInit} from '@angular/core';
import {SalesInvoice} from "../../../fetaures/sales/sales-invoice";

@Component({
  standalone: true,
  selector: 'ea-sales-dashboard-page',
  imports: [
    SalesInvoice
  ],
  template: `
    <div class="p-4 bg-white">
      <h2>Sales Dashboard Page</h2>
      <ea-sales-invoice />
    </div>
  `
})

export class SalesDashboardPage implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
