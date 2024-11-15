import {Component, computed, input, output} from '@angular/core';

@Component({
  standalone: true,
  selector: 'ea-data-paginator, DataPaginator',
  template: `
    <p>Data Pager :: {{ totalRecord() }} record</p>
    @for (p of tPages(); track p) {
      @let classes = "bg-success fw-bolder text-danger shadow text-white";
      <span class="px-3 py-2 rounded-circle  mx-2  bg-success-subtle" (click)="gotoPage(p)"
            [class]="{classes : p == currentPage()}"
            style="cursor:pointer;"
      >{{ p }}</span>
    }
  `
})
export class DataPaginator {
  currentPage = input(1);
  totalPages = input(1);
  totalRecord = input(0);
  pageSize = input(5);
  onPageChange = output<number>();
  tPages = computed(() => {
    let res = [];
    for (let i = 1; i <= this.totalPages(); i++) {
      res.push(i)
    }
    return res;
  })

  constructor() {
  }

  protected gotoPage(page: number) {
    this.onPageChange.emit(page);
  }
}
