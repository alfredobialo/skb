import {Component, inject} from '@angular/core';
import {PrimeNgButtonComponents, PrimeNgDialogComponents} from "../../primeng-component-import";
import {DialogService, DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {TodosComponent} from "../../../fetaures/todos/todos.component";

@Component({
  selector: 'ea-simple-dialog',
  standalone: true,
  imports: [PrimeNgDialogComponents, PrimeNgButtonComponents],
  template: `
   <div class="">
     <p class="lead">Dynamic Dialog demo</p>
     <p-button (onClick)="openDialog()" severity="primary">Open Dialog</p-button>
   </div>
  `,
  styles: ``
})
export class SimpleDialogComponent {
    dialogService =  inject(DialogService);
    //dialogConfig =  inject(DynamicDialogConfig);
  private dialogRef: DynamicDialogRef<TodosComponent> | undefined ;

    openDialog(){
      this.dialogRef = this.dialogService.open(TodosComponent,  {
        header : "Todo List",
        data : {
            fromDialog : true,
          defaultTodo : "Opened From Dynamic Dialog"
        }

      });

      //this.dialogRef.maximize()
    }

}
