import {
  Component,
  effect,
  inject,
  input,
  signal,
  viewChild,
  ElementRef,
  output
} from '@angular/core';
import {TodoItemModel} from "./model/TodoItemModel";
import {ApiSignalTodoStore} from "./state/todoSignalStore";

@Component({
  //changeDetection: ChangeDetectionStrategy.OnPush,
  standalone:true,
  selector: 'ea-TodoItem',
  template: `
    <div class="my-3 todo-border px-3 rounded-3  d-flex justify-content-between align-items-center" [style.background-color]="isEditMode() ? '#e8f4f9': 'transparent'">
      <div class="d-flex flex-grow-1">
        <input type="checkbox" class="form-check form-check-input"
               (click)="markAsDone(todo())"
               [disabled]="todo().processing"
               [checked]="todo().isDone" />
        @if(isEditMode()){
          <input type="text" class="ms-2 form-control " [value]="todo().title" #editedTodoValue >
        }
        @else{
          <p class="mx-2 cursor-pointer todo-item"
             (dblclick)="!todo().processing && markAsDone(todo())"
             [class]="{'todo-done':todo().isDone, 'todo-not-done':!todo().isDone}">{{ todo().title }}
          </p>
        }

      </div>
      <div class="d-flex justify-content-between align-items-center">
 <span class="p-2 todo-edit-ui  la la-2x  text-muted" [class]="{'la-pencil': isEditMode() == false, 'la-check' : isEditMode() === true}"
       style="cursor:pointer"
       (click)="handleEditing()">
 </span>
        @if(isEditMode()){
          <span class="p-2 todo-edit-ui la-2x las la-times text-muted"
                style="cursor:pointer"
                (click)="cancelEditing()"></span>
        }


        <button class="btn btn-link text-danger "
                [disabled]="todo().processing"
                (click)="deleteTodo(todo())">
          <span class="la la-trash-o la-2x"></span>
        </button>
      </div>

    </div>
  `
})

export class TodoItemComponent {

  editedTodo = viewChild<ElementRef>("editedTodoValue");
  todo = input.required<TodoItemModel>();
  private store = inject(ApiSignalTodoStore);
  isEditMode = signal(false);
  private currentEditedTodoValue = signal("");
  onStartEditing = output<TodoItemModel>();

  constructor() {
    effect(() => {
      if(this.isEditMode()){
        this.currentEditedTodoValue.set( this.editedTodo()?.nativeElement.value);
        this.editedTodo()?.nativeElement.focus();
      }

    }, {allowSignalWrites : true});
  }
  markAsDone(todo:TodoItemModel){
   this.store.markTodo(todo);
   console.log("MARK TODO COMPONENT => ", todo);
  }

  deleteTodo(todo:TodoItemModel){
    if(confirm(`Are you sure you want delete the selected Todo [${todo.title}]`)){
      this.store.deleteTodo(todo);
    }

  }
  private startEditing(){
    this.isEditMode.set(true);
    this.onStartEditing.emit(this.todo());
  }
  private endEditing(){

    // Update Todo with data from input
    if(this.editedTodo()?.nativeElement.value?.trim() !== ""){
      // update todo Store here
      this.store.updateTitle(this.todo().id,this.editedTodo()?.nativeElement.value);
      this.isEditMode.set(false);
    }
  }

  protected handleEditing(){
    if(this.isEditMode() === false){
      this.startEditing();
    }
    else {
      this.endEditing();
    }
  }

  cancelEditing() {
    this.isEditMode.set(false);
  }
}
