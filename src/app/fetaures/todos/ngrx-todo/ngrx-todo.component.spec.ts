import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxTodoComponent } from './ngrx-todo.component';

describe('NgrxTodoComponent', () => {
  let component: NgrxTodoComponent;
  let fixture: ComponentFixture<NgrxTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgrxTodoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgrxTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
