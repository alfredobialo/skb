import {Component, OnInit} from '@angular/core';
import {SalesInvoice} from "../../../fetaures/sales/sales-invoice";
import {SimpleDialogComponent} from "../../../shared/components/dialog/simple-dialog.component";

@Component({
  standalone: true,
  selector: 'ea-sales-dashboard-page',
  imports: [
    SalesInvoice,
    SimpleDialogComponent
  ],
  template: `
    <div class="p-4 bg-white">
      <h2>Sales Dashboard Page</h2>
      <ea-simple-dialog />
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
