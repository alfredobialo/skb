import {Component} from "@angular/core";

//Annotation
@Component({
  selector: "ea-sales-invoice",
  standalone: true,
  template: `
    <h1>Sales Invoice</h1>
    <button class="print" (click)="printInvoice()"><i class="la-3x la la-print"></i></button>
    <table class="table table-hover table-light table-bordered">
      <thead>
      <tr>
        <th>1</th>
        <th style="width:35%;">Item Description</th>
        <th style="width:9%;">Qty</th>
        <th style="width:13%;">Amt (NGN)</th>
        <th style="width:10%;">Disc.</th>
        <th style="width:10%;">Tax</th>
        <th style="width:15%;">Total</th>
      </tr>
      </thead>
      <tbody>
        @for( n of items;  track n.id){
          <tr style="font-size:1.2rem;" (mouseover)="n.active = true" (mouseout)="n.active =false">
            <td>{{ $index + 1 }}</td>
            <td><select name="" id="" class="form-control form-select">
              @for(item of items; track item.id){
                <option [value]="item.id">{{item.item}}</option>
              }
            </select></td>
            <td><input type="number" class="form-control" value="1"></td>
            <td>0.00</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>0.00   @if(n.active){<button (click)="removeItemAt($index)" class="btn btn-danger btn-sm">X</button>}</td>
          </tr>
        }
      <tr style="font-size:1.2rem; height:45px;">
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>

      </tbody>


    </table>
  `,
  imports: [
    ],
  styles: [`
    button.print {
      padding: 1rem;
      border: none;
      background-color: #394e80;
      color: white;
      border-radius: 6px;
      transition: all 300ms linear;

    }

    button.print:hover, button.print:focus {
      background-color: #222f4d;
    }
  `]
})
export class SalesInvoice{

  n:number = 1;
  items : any[] = [
    {
    active: false,
    id: 0,
    item : "DVD Player"
  },{
      active: false,
      id: 1,
      item : "Apple iPod Nano Player"
    },{
      active: false,
      id: 2,
      item : "Nintendo Gameboy"
    },{
      active: false,
      id: 3,
      item : "Laptop"
    },{
      active: false,
      id: 4,
      item : "Tablet PC"
    }]
  showButton: boolean = false;
  printInvoice(){
    window.print();
  }

  removeItemAt($index: number) {
    this.items.splice($index, 1);
  }
}




